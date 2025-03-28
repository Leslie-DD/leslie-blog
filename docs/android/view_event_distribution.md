---
title: View 的事件分发机制
author: Evan
editLink: false
comment: false
tag:
  - Android
date: 2025-03-25
---


本节将介绍 View 的一个核心知识点：`事件分发机制`。

事件分发机制不仅仅是核心知识点更是难点，不少初学者甚至中级开发者面对这个问题时都会觉得困惑。另外，View 的另一大难题`滑动冲突`，它的解决方法的理论基础就是事件分发机制，因此掌握好 View 的事件分发机制是十分重要的。本节将深入介绍 View 的事件分发机制，在这一篇会对事件分发机制进行概括性地介绍，而在下一篇将结合系统源码去进一步分析事件分发机制。

## 一、点击事件的传递规则

在介绍点击事件的传递规则之前，首先我们要明白这里要分析的对象就是 `MotionEvent`，即`点击事件`，关于 MotionEvent 在之前已经进行了介绍。所谓点击事件的事件分发，其实就是对 MotionEvent 事件的分发过程，即当一个 MotionEvent 产生了以后，系统需要把这个事件传递给一个具体的 View，而这个传递的过程就是分发过程。点击事件的分发过程由三个很重要的方法来共同完成：`dispatchTouchEvent`、`onInterceptTouchEvent` 和 `onTouchEvent`，下面我们先介绍一下这几个方法。

```java
public boolean dispatchTouchEvent(MotionEvent ev)
```

用来进行事件的分发。如果事件能够传递给当前 View，那么此方法一定会被调用，返回结果受当前 View 的 onTouchEvent 和下级 View 的 dispatchTouchEvent 方法的影响，表示是否消耗当前事件。

```java
public boolean onInterceptTouchEvent(MotionEvent event)
```

在上述方法内部请用，用来判断是否拦截某个事件，如果当前 View 拦截了某个事件，那么在同一个事件序列当中，此方法不会被再次调用，返回结果表示是否拦截当前事件。

```java
public boolean onTouchEvent(MotionEvent event)
```

在 dispatchTouchEvent 方法中调用，用来处理点击事件，返回结果表示是否消耗当前事件，如果不消耗，则在同一个事件序列中，当前 View 无法再次接收到事件。

上述三个方法到底有什么区别呢？它们是什么关系呢？其实它们的关系可以用如下伪代码表示：

```java
public boolean dispatchTouchEvent(MotionEvent ev) {
    boolean consume false;
    if (onInterceptTouchEvent(ev)) {
        consume = onTouchEvent(ev);
    } else {
        consume = child.dispatchTouchEvent(ev);
    }
    return consume;
}
```

上述伪代码已经将三者的关系表现得淋漓尽致。通过上面的伪代码，我们也可以大致了解点击事件的传递规则：对于一个根 ViewGroup 来说，点击事件产生后，首先会传递给它，这时它的 dispatchTouchEvent 就会被调用，如果这个 ViewGroup 的 onInterceptTouchEvent 方法返回 true 就表示它要拦截当前事件，接着事件就会交给这个 ViewGroup 处理，即它的onTouchEvent 方法就会被调用：如果这个 ViewGroup 的 onInterceptTouchEvent 方法返回 false 就表示它不拦截当前事件，这时当前事件就会继续传递给它的子元素，接着子元素 dispatchTouchEvent 方法就会被调用，如此反复直到事件被最终处理。

当一个 View 需要处理事件时，如果它设置了 OnTouchListener，那么 OnTouchListener 中的 onTouch 方法会被回调。这时事件如何处理还要看 onTouch 的返回值，如果返回 false，则当前 View 的 onTouchEvent 方法会被调用；如果返回 true，那么 onTouchEvent 方法将不会被调用。`由此可见，给 View 设置的 OnTouchListener，其优先级比 onTouchEvent 要高。`在 onTouchEvent 方法中，如果当前设置的有 OnClickListener，那么它的 onClick 方法会被调用。`可以看出，平时我们常用的 OnClickListener，其优先级最低，即处于事件传递的尾端。`

当一个点击事件产生后，它的传递过程遵循如下顺序：`Activity -> Window -> View`，即事件总是先传递给 Activity，Activity 再传递给 Window，最后 Window 再传递给顶级 Vicw。顶级 View 接收到事件后，就会按照事件分发机制去分发事件。考虑一种情况，如果一个 View 的 onTouchEvent 返回 false，那么它的父容器的 onTouchEvent 将会被调用，依此类推。如果所有的元素都不处理这个事件，那么这个事件将会最终传递给 Activity 处理，即 Activity的 onTouchEvent 方法会被调用。这个过程其实也很好理解，我们可以换一种思路，假如点击事件是一个难题，这个难题最终被上级领导分给了一个程序员去处理（这是事件分发过程），结果这个程序员搞不定（onTouchEvent 返回了 false），现在该怎么办呢？难题必须要解决，那只能交给水平更高的上级解决（上级的 onTouchEvent 被调用），如果上级再摘不定，那只能交给上级的上级去解决，就这样将难题一层层地向上抛，这是公司内部一种很常见的处理问题的过程。从这个角度来看，View 的事件传递过程还是很贴近现实的，毕竟程序员也生活在现实中。

关于事件传递的机制，这里给出一些结论，根据这些结论可以更好地理解整个传递机制，如下所示。

1. 同一个事件序列是指从手指接触屏幕的那一刻起，到手指离开屏幕的那一刻结束， 在这个过程中所产生的一系列事件，这个事件序列以 down 事件开始，中间含有数量不定 的 move 事件，最终以 up 事件结束。
2. 正常情况下，一个事件序列只能被一个 View 拦截且消耗。
    > 这一条的原因可以参考（3），因为一旦一个元素拦截了某此事件，那么同一个事件序列内的所有事件都会直接交给它处理，因此同一个事件序列中的事件不能分别由两个 View 同时处理，但是通过特殊手段可以做到，比如一个 View 将本该自己处理的事件通过 onTouchEvent 强行传递给其他 View 处理。
3. 某个 View 一旦决定拦截，那么这一个事件序列都只能由它来处理（如果事件序列能够传递给它的话），并且它的 onInterceptTouchEvent 不会再被调用。
    > 这条也很好理解，就是说当一个 View 决定拦截一个事件后，那么系统会把同一个事件序列内的其他方法都直接交给它来处理，因此就不用再调用这个 View 的 onIntcrceptTouchEvent 去询问它是否要拦截了。值得一提的是，这里提到的 View 指的是 ViewGroup，因为最底层的 View 是没有 onInterceptTouchEvent 方法的。
4. 某个 View 一旦开始处理事件，如果它不消耗 ACTION_DOWN 事件（onTouchEvent 返回了 false），那么同一事件序列中的其他事件都不会再交给它来处理，并且事件将重新交由它的父元素去处理，即父元素的 onTouchEvent 会被调用。
    > 其原因在于由于 View 不消耗 Down 事件，因此顶层 ViewGroup 并不会持有指向 View 的 TouchTarget 对象。意思就是事件一旦交给一个 View 处理，那么它就必须消耗掉，否则同一事件序列中剩下的事件就不再交给它来处理了，这就好比上级交给程序员一件事，如果这件事没有处理好，短期内上级就不敢再把事情交给这个程序员做了，二者是类似的道理。
5. 如果 View 不消耗除 ACTION_DOWN 以外的其他事件，那么这个点击事件会消失，此时父元素的 onTouchEvent 并不会被调用，并且当前View 可以持续收到后续的事件，最终这些消失的点击事件会传递给 Activity 处理。
    > 这一结论的原因在于，该 View 消耗了 Down 事件，那么该 View 的上级 ViewGroup 会持有指向该 View 的 TouchTarget 对象，因此后续事件都会直接交付给该 View。但是由于后续事件不消耗，在 Activity 的 dispatchTouchEvent 则会调用 Activity 的 onTouchEvent 方法。
6. ViewGroup 默认不拦截任何事件。Android 源码中 ViewGroup 的 onInterceptTouchEvent 方法默认返回 false。
7. View 没有 onInterceptTouchEvent 方法，一旦有点击事件传递给它，那么它的 onTouchEvent 方法就会被调用。
8. View 的 onTouchEvent 默认都会消耗事件（返回 true），除非它是不可点击的（clickable 和 longClickable 同时为 false）。View 的 longClickable 属性默认都为 false, clickable 属性要分情况，比如 Button 的 clickable 属性默认为 true，而 TextView 的 clickable 属性默认为 false。
9. View 的 enable 属性不影响 onTouchEvent 的默认返回值。哪怕一个 View 是 disable 状态的，只要它的 clickable 或者 longClickable 有一个为 true，那么它的 onTouchEvent 就返回true。
10. onClick 会发生的前提是当前 View 是可点击的，并且它收到了 down 和 up 的事件。
11. 事件传递过程是由外向内的，即事件总是先传递给父元素，然后再由父元素分发给子 View，通过 requestDisallowInterceptTouchEvent 方法可以在子元素中干预父元素的事件分发过程，但是 ACTION_DOWN 事件除外。

## 二、事件分发的源码解析

上一节分析了 View 的事件分发机制，本节将会从源码的角度去进一步分析、证实上面的结论。

### 1. Activity 对点击事件的分发过程

点击事件用 MotionEvent 来表示，当一个点击操作发生时，事件最先传递给当前 Activity，由 Activity 的 dispatchTouchEvent 来进行事件派发，具体的工作是由 Activity 内部的 Window 来完成的。Window 会将事件传递给 decor view，decor view 一般就是当前界面的底层容器（即 setContentView 所设置的 View 的父容器），通过 Activity.getWindow.getDecorView() 可以获得。我们先从 Activity 的 dispatchTouchEvent 开始分析。

源码：`Activity#dispatchTouchEvent`

```java
public boolean dispatchTouchEvent(MotionEvent ev) {
    if (ev.getAction() == MotionEvent.ACTION_DOWN) {
        onUserInteraction();
    }
    if (getWindow().superDispatchTouchEvent(ev)) {
        return true;
    }
    return onTouchEvent(ev);
}
```
现在分析上面的代码。首先事件开始交给 Activity 所附属的 Window 进行分发.
- 如果返回 true，整个事件循环就结束了;
- 返回 false 意味着事件没人处理，所有 View 的 onTouchEvent 都返回了 false，那么 Activity 的 onTouchEvent 就会被调用。

接下来看 Window 是如何将事件传递给 ViewGroup 的。通过源码我们知道，Window 是个抽象类，而 Window 的 superDispatchTouchEvent 方法也是个抽象方法，因此我们必须找到 Window 的实现类才行。

源码：`Window#superDispatchlouchEvent`

```java
public abstract boolean superDispatchTouchEvent(MotionEvent event);
```

那么到底 Window 的实现类是什么呢？其实是 PhoneWindow，这一点从 Window 的源码中也可以看出来，在 Window 的说明中，有这么一段话：

> Abstract base class for a top-level window look and behavior policy. An instance of this class should be used as the top-level view added to the window manager. It provides standard UI policies such as a background, title area, default key processing, etc.
The only existing implementation of this abstract class is android. policy. PhoneWindow, which you should instantiate when needing a Window. Eventually that class will be refactored and a factory method added for creating Window instances without knowing about a particular implementation.

上面这段话的大概意思是：Window 类可以控制顶级 View 的外观和行为策略，它的唯一实现位于 android.policy.PhoneWindow 中，当你要实例化这个 Window 类的时候，你并不知道它的细节，因为这个类会被重构，只有一个工厂方法可以使用。尽管这看起来有点模糊，不过我们可以看一下 android.policy.PhoneWindow 这个类，尽管实例化的时候此类会被重构，仅是重构而已，功能是类似的。

由于 Window 的唯一实现是 PhoneWindow，因此接下来看一下 PhoneWindow 是如何处理点击事件的，如下所示。

源码：`PhoneWindow#superDispatchTouchEvent`

```java
public boolean superDispatchTouchEvent(MotionEvent event) {
    return mDecor.superDispatchTouchEvent(event);
}
```

到这里逻辑就很清晰了，PhoneWindow 将事件直接传递给了 DecorView，这个 DecorView 是什么呢？请看下面：

```java
private final class DecorView extends FrameLayout implements RootViewSurfaceTaker

// This is the top-level view of the window, containing the window decor
private DecorView mDecor;

@Override
public final View getDecorView() {
    if (mDecor = null) {
        installDecor();
    }

    return mDecor;
}
```

我们知道，通过`((ViewGroup)getWindow().getDecorView().findViewById(android.R.id.content)).gctChildAt(O)`这种方式就可以获取 Activity 所设置的 View，这个 mDccor 显然就是 `getWindow().getDecorView()`返回的 View，而我们通过 setContentView 改置的 View 是它的一个子 View。目前事件传递到了 DecorView 这里，由于 DecorView 继承自 FrameLayout 且是父 View，所以最终事件会传递给 View。换句话来说，事件肯定会传递到 View，不然应用如何响应点击事件呢？不过这不是我们的重点，重点是事件到了 View 以后应该如何传递，这对我们更有用。从这里开始，事件已经传递到项级 View 了，即在 Activity 中通过 setContentView 所设置的 View，另外顶级 View 也叫根 View，顶级 View 一般来说都是 ViewGroup。

### 2. 顶级 View 对点击事件的分发过程

关于点击事件如何在 View 中进行分发，上一节已经做了详细的介绍，这里再大致回顾一下。点击事件达到项级 View（一般是一个 ViewGroup）以后，会调用 ViewGroup 的 dispatchTouchEvent 方法，然后的逻辑是这样的：如果顶级 ViewGroup 拦截事件即 onInterceptTouchEvent 返回 true，则事件由 ViewGroup 处理，这时如果 ViewGroup 的 mOnTouchListener 被设置，则 onTouch 会被调用，否则 onTouchEvent 会被调用。也就是说，如果都提供的话，onTouch 会屏蔽掉 onTouchEvent。在 onTouchEvent 中，如果设置了 mOnClickListener，则 onClick 会被调用。如果顶级 ViewGroup 不拦截事件，则事件会传递给它所在的点击事件链上的子 View，这时子 View 的 dispatchTouchEvent 会被调用。到此为止，事件已经从顶级 View 传递给了下一层 View，接下来的传递过程和顶级 View 是一致的，如此循环，完成整个事件的分发。

首先看 ViewGroup 对点击事件的分发过程，其主要实现在 ViewGroup 的 dispatchTouchEvent 方法中，这个方法比较长，这里分段说明。先看下面一段，很显然，它描述的是当前 View 是否栏截点击事情这个逻辑。

```java
final boolean intercepted;
ViewRootImpl viewRootImpl = getViewRootImpl();
if (actionMasked == MotionEvent.ACTION_DOWN || mFirstTouchTarget != null) {
    final boolean disallowIntercept = (mGroupFlags & FLAG_DISALLOW_INTERCEPT) != 0;
    final boolean isBackGestureInProgress = (viewRootImpl != null
            && viewRootImpl.getOnBackInvokedDispatcher().isBackGestureInProgress());
    if (!disallowIntercept || isBackGestureInProgress) {
        // Allow back to intercept touch
        intercepted = onInterceptTouchEvent(ev);
        ev.setAction(action); // restore action in case it was changed
    } else {
        intercepted = false;
    }
} else {
    // There are no touch targets and this action is not an initial down
    // so this view group continues to intercept touches.
    intercepted = true;
}
```

从上面代码我们可以看出，ViewGroup 在如下两种情况下会判断是否要拦截当前事件：事件类型为 ACTION_DOWN 或者 mFirstTouchTarget != null。 ACTION_DOWN 事件好理解，那么 mFirstTouchTarget != null 是什么意思呢？这个从后面的代码逻辑可以看出来，当事件由 ViewGroup 的子元素成功处理时，mFirstTouchTarget 会被赋值并指向子元素，换种方式来说，当 ViewGroup 不拦截事件并将事件交由子元素处理时 mFirstTouchTarget != null。反过来，一旦事件由当前 ViewGroup 拦截时，mFirstTouchTarget != null 就不成立。那么当 ACTION_MOVE 和 ACTION_UP 事件到来时, 由于(actionMasked == MotionEvent.ACTION_DOWN || mFirst TouchTarget != null) 这个条件为 false，将导致 ViewGroup 的 onInterceptTouchEvent 不会再被调用，并且同一序列中的其他事件都会默认交给它处理。

当然，这里有一种特情况，那就是 `FLAG_DISALLOW_INTERCEPT` 标记位，这个标记位是通过  `requestDisallowInterceptTouchEvent` 方法来设置的，一般用于子 View 中。FLAG_DISALLOW_INTERCEPT 一旦设置后，ViewGroup 将无法拦截除了ACTION_DOWN 以外的其他点击事件。为什么说是除了 ACTION_DOWN 以外的其他事件呢？这是因为 ViewGroup 在分发事件时，如果是 ACTION_DOWN 就会重置 FLAG_DISALLOW_INTERCEPT 这个标记位，将导致子 View 中设置的这个标记位无效。因此，当面对 ACTION_DOWN 事件时，ViewGroup，总是会调用自己的 onInterceptTouchEvent 方法来询问自己是否要拦截事件，这一点从源码中也可以看出来。在下面的代码中，ViewGroup 会在 ACTION_DOWN 事件到来时做重置状态的操作，而在 resetTouchState 方法中会对 FLAG_DISALLOW_INTERCEPT 进行重置，因此子 View 调用 requestDisallowInterceptTouchEvent 方法并不能影响 ViewGroup 对 ACTION_DOWN 事件的处理。

```java
// Handle an initial down.
if (actionMasked == MotionEvent.ACTION_DOWN) {
    // Throw away all previous state when starting a new touch gesture.
    // The framework may have dropped the up or cancel event for the previous gesture
    // due to an app switch, ANR, or some other state change.
    cancelAndClearTouchTargets(ev); 
    resetTouchState();
}
```

从上面的源码分析，我们可以得出结论：当 ViewGroup 决定栏截事件后，那么后续的点击事件将会默认交给它处理并且不再调用它的 onInterceptTouchEvent 方法，这证实了第一节末尾处的第 3 条结论。FLAG_DISALLOW_INTERCEPT 这个标志的作用是让 ViewGroup 不再拦截事件，当然前提是 ViewGroup 不拦截 ACTION_DOWN 事件，这证实了第一节末尾处的第 11 条结论。

那么这段分析对我们有什么价值呢？总结起来有两点：

- 第一点，onInterceptTouchEvent 不是每次事件都会被调用的，如果我们想提前处理所有的点击事件，要选择 dispatchTouchEvent 方法，只有这个方法能确保每次都会调用，当然前提是事件能够传递到当前的 ViewGroup；
- 另外一点，FLAG_DISALLOW_INTERCEPT 标记位的作用给我们提供了一个思路，当面对滑动冲突时，我们可以是不是考虑用这种方法去解决问题？关于滑动冲突，将在下一篇进行详细分析。

接着再看当 ViewGroup 不拦截事件的时候，事件会向下分发交由它的子 View 进行处理，这段源码如下所示。

```java
final View[] children = mChildren;
for (int i = childrenCount - 1; i >= 0; i--) {
    final int childIndex = customOrder
        ? getChildDrawingOrder(childrenCount, i) : i;
    final View child = (preorderedList == null)
        ? children[childIndex] : preorderedlist.get(childIndex);
    if (!canViewReceivePointerEvents(child) 
        || !isTransformedTouchPointInView(x, y, child, null)) {
        continue;
    }

    newTouchTarget = getTouchTarget(child);
    if (newTouchTarget != null) {
        // Child is already receiving touch within its bounds.
        // Give it the new pointer in addition to the ones it is handling.
        newTouchTarget.pointerIdBits != idBitsToAssign; 
        break;
    }
    resetCancelNextUpFlag(child);
    if (dispatchTransformedTouchEvent(ev, false, child, idBitsToAssign)) {
        // Child wants to receive touch within its bounds.
        mLastTouchDownTime = ev.getDownTime();
        if (preorderedList != null) {
            // childindex points into presorted list, find original index
            for (int j = 0; j< childrenCount; j++) {
                if (children[childIndex] == mChildren[j]) {
                    mLastTouchDownIndex = j;
                    break;
                }
            }
        } else {
            mLastTouchDownIndex = childIndex;
        }
        mLastTouchDownX = ev.getX();
        mLastTouchDownY - ev.getY();
        newTouchTarget = addTouchTarget(child, idBitsToAssign);
        alreadyDispatchedToNewTouchTarget = true;
        break:
    }
}
```

上面这段代码逻辑也很清晰，首先遍历 ViewGroup 的所有子元素，然后判断子元素是否能够接收到点击事件。是否能够接收点击事件主要由两点来衡量：子元素是否在播动画和点击事件的坐标是否落在子元素的区域内。如果某个子元素满足这两个条件，那么事件就会传递给它来处理。可以看到，dispatchTransformedTouchEvent 实际上调用的就是子元素的 dispatchTouchEvent 方法，在它的内部有如下一段内容，而在上面的代码中 child 传递的不是 null，因此它会直接调用子元素的 dispatchTouchEvent 方法，这样事件就交由子元素处理了，从而完成了一轮事件分发。

```java
if (child == null) {
    handled = super.dispatchTouchEvent(event);
} else {
    handled = child.dispatchTouchEvent(event);
}
```

如果子元素的 dispatchTouchEvent 返回 true，这时我们暂时不用考虑事件在子元素内部
是怎么分发的，那么 mFirstTouchTarget 就会被赋值同时跳出 for 循环，如下所示。

```java
newTouchTarget = addTouchTarget(child, idBitsToAssign);
alreadyDispatchedloNewTouchTarget = true; 
break;
```

这几行代码完成了 mFirstTouchTarget 的赋值并终止对子元素的遍历。如果子元素的 dispatchTouchEvent 返回 false,ViewGroup 就会把事件分发给下一个子元素（如果还有下一个子元素的话）。

其实 mFirstTouchTarget 真正的赋值过程是在 addTouchTarget 内部完成的，从下面的 addTouchTarget 方法的内部结构可以看出，mFirstTouchTarget 其实是一种单链表结构。mFirstTouchTarget 是否被赋值，将直接影响到 ViewGroup 对事件的拦截策略，如果 mFirstTouchTarget 为 null，那么 ViewGroup 就默认拦截接下来同一序列中所有的点击事件，这一点在前面已经做了分析。

```java
private TouchTarget addlouchTarget (View child, int pointerIdBits) l
    TouchTarget target = TouchTarget.obtain(child, pointerIdBits);
    target.next = mFirstTouchTarget;
    mFirstTouchTarget = target;
    return target;
}
```

如果遍历所有的子元素后事件都没有被合适地处理，这包含两种情况：第一种是 ViewGroup 没有子元素；第二种是子元素处理了点击事件，但是在 dispatchTouchEvent 中返回了 false，这一般是因为子元素在 onTouchEvent 中返回了 false。在这两种情况下，ViewGroup 会自己处理点击事件，这里就证实了第一节中的第 4 条结论，代码如下所示。

```java
// Dispatch to touch targets.
if (mFirstTouchTarget == null) {
    // No touch targets so treat this as an ordinary view.
    handled = dispatchTransformedTouchEvent(ev, canceled, null, 
        TouchTarget.ALL_POINTER_IDS) ;
}
```

注意上面这段代码，这里第三个参数 child 为 null，从前面的分析可以知道，它会调用 super.dispatchTouchEvent(event)，很显然，这里就转到了 View 的 dispatchTouchEvent 方法，即点击事件开始交由 View 来处理，请看下面的分析。

### 3. View 对点击事件的处理过程

View 对点击事件的处理过程稍微简单一些，注意这里的 View 不包含 ViewGroup。先看它的 dispatchTouchEvent 方法，如下所示。

```java
public boolean dispatchTouchEvent(MotionEvent event) {
    boolean result = false;
    ...
    if (onFilterTouchEventForSecurity(event)) {
        // noinspection SimplifiableIfStatement
        ListenerInfo li = mListenerInfo;
        if (li != null && li.mOnTouchListener != null 
                && (mViewFlags & ENABLED MASK) == ENABLED 
                && li.mOnTouchListener.onTouch(this, event)) {
            result = true;
        }
        if (!result && onTouchEvent(event)) {
            result = true;
        }
    }
    ...
    return result;
}
```

View 对点击事件的处理过程就比较简单了，因为 View（这里不包含 ViewGroup）是一个单独的元素，它没有子元素因此无法向下传递事件，所以它只能自己处理事件。从上面的源码可以看出 View 对点击事件的处理过程，首先会判断有没有设置 OnTouchListener，如果 OnTouchListener 中的 onTouch 方法返回 true，那么 onTouchEvent 就不会被调用，`可见OnTouchListener 的优先级高于 onTouchEvent`，`这样做的好处是方便在外界处理点击事件`。

接着再分析 onTouchEvent 的实现。先看当 View 处于不可用状态下点击事件的处理过程，如下所示。很显然，不可用状态下的 View 照样会消耗点击事件，尽管它看起来不可用。

```java
if ((viewFlags & ENABLED MASK) -= DISABLED) {
    if (event.getAction() == MotionEvent.ACTION_UP 
            && (mPrivateFlags & PFELA_PRESSED) != 0) {
        setPressed(false);
    }
    // A disabled view that is clickable still consumes the touch
    // events, it just doesn't respond to them.
    return ((viewFlags & CLICKABLE) == CLICKABLE 
        || (viewFlags & LONG_CLICKABLE) == LONG_CLICKABLE));
```
接着，如果 View 设置有代理，那么还会执行 TouchDelegate 的 onTouchEvent 方法，这个 onTouchEvent 的工作机制看起来和 OnTouchListener 类似，这里不深入研究了。

```java
if (mTouchDelegate != null) {
    if (TouchDelegate.onTouchEvent(event)) {
        return true;
    }
}
```

下面再看一下 onTouchEvent 中对点击事件的具体处理，如下所示。

```java
if (((viewFlags & CLICKABLE) == CLICKABLE 
        || (viewFlags & LONG_CLICKABLE) == LONG_CLICKABLE)) {
    switch (event.getAction()) {
        case MotionEvent.ACTION_ UP:
            boolean prepressed = (mPrivateFlags & PELAG_PREPRESSED) != 0;
            if ((mPrivateFlags & PFLAG_PRESSED) != 0 || prepressed) {
                ...
                if (!mHasPerformedLongPress) {
                    // This is a tap, so remove the longpress check
                    removeLongPressCallback() :
                    // Only perform take click actions if we were in the pressed state
                    if (!focusTaken) {
                        // Use a Runnable and post this rather than calling
                        // performClick directly. This lets other visual state
                        // of the view update before click actions start.
                        if (mPerformClick == null) {
                            mPerformClick = new PerformClick();
                        }
                        if (!post(mPerformClick)) {
                            performClick();
                        }
                    }
                }
                ...
            }
            break;
    }
    ...
    return true;
}
```

从上面的代码来看，只要 View 的 CLICKABLE 和 LONG_CLICKABLE 有一个为 true，那么它就会消耗这个事件，即 onTouchEvent 方法返回 true，不管它是不是 DISABLE 状态，这就证实了 第一节末尾处的第 8、第 9 和第 10 条结论。然后就是当 ACTION_UP 事件发生时，会触发 performClick 方法，如果 View 设置了 OnClickListener，那么 perfomClick 方法内部会调用它的 onClick 方法，如下所示。

```java
public boolean performClick() {
    final boolean result;
    final ListenerInfo li = mListenerInfo;
    if (li != null && li.mOnClickListener != null) {
        playSoundEffect(SoundEffectConstants.CLICK);
        1i.mOnClickListener.onClick(this);
        result = true:
    } else {
        result = false;
    }
    sendAccessibilityEvent(AccessibilityEvent.TYPE_VIEW_CLICKED) ;
    return result;
}
```

View 的 LONG_CLICKABLE 属性默认次 false，而 CLICKABLE 属性是否 false 和具体的 View 有关，确切来说是可点击的 View 其 CLICKABLE 为 true，不可点击的 View 其CLICKABLE 为 false，比如 Button 是可点击的，TextView 是不可点击的。通过 setClickable 和 setLongClickable 可以分别改变 View 的 CLICKABLE 和 LONG_CLICKABLE 属性。另外, setOnClickListener 会自动将 View 的 CLICKABLE 设为 true, setOnLongClickListener 则会自动将 View 的 LONG_CLICKABLE 设为 true，这一点从源码中可以看出来，如下所示。

```java
public void setOnClicklistener(OnClickListener l) {
    if (!isClickable()) {
        setClickable(true);
    }
    getListenerInfo().mOnClickListener = l;
}
public void setOnLongClickListener(OnLongClickListener l) {
    if (!isLongClickable()) {
        setLongClickable(true);
    }
    getListenerInfo().mOnLongClickListener = l;
}
```

到这里，点击事件的分发机制的源码实现已经分析完了，结合第一节中的理论分析和相关结论，读者就可以更好地理解事件分发了。


## 三、REF

转载自[《Android 开发艺术探索》]()


