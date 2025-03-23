---
title: 排序算法
author: Evan
editLink: false
comment: false
date: 2024-04-19
---

::: info 各种排序算法 Java 实现

::: code-tabs

@tab quick

```java
public static void quickSort(int l, int r, int[] array) {
    if (l >= r) {
        return;
    }
    int mid = partition(l, r, array);
    quickSort(l, mid - 1, array);
    quickSort(mid + 1, r, array);
}

public static int partition(int l, int r, int[] array) {
    int j = r;
    int i = l;
    int valueMid = array[i];
    while (i < j) {
        while (j > i && array[j] > valueMid) {
            j--;
        }
        if (i < j) {
            array[i++] = array[j];
        }
        while (j > i && array[i] < valueMid) {
            i++;
        }
        if (i < j) {
            array[j--] = array[i];
        }
    }
    array[i] = valueMid;
    return i;
}
```

@tab merge

```java
public void mergeSort(int l, int r) {
    if (l >= r) return;

    int mid = (l + r) / 2;
    mergeSort(l, mid);
    mergeSort(mid + 1, r);

    int[] tmp = new int[r - l + 1];
    int i = l;
    int j = mid + 1;
    int k = 0;

    while (i <= mid && j <= r) {
        if (array[i] <= array[j]) {
            tmp[k++] = array[i++];
        } else {
            tmp[k++] = array[j++];
        }
    }

    while (i <= mid) {
        tmp[k++] = array[i++];
    }

    while (j <= r) {
        tmp[k++] = array[j++];
    }

    // 将排序后的元素，全部都整合到数组a中。
    for (i = 0; i < k; i++) {
        array[l + i] = tmp[i];
    }

    tmp = null;
}
```

@tab selection

```java
public void selectionSort() {
    int len = array.length;
    if (len <= 1) {
        return;
    }
    for (int i = 0; i < len - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < len; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        int tempVal = array[minIndex];
        array[minIndex] = array[i];
        array[i] = tempVal;
    }
}
```

@tab bubble

```java
public void bubbleSort() {
    int len = array.length;
    if (len <= 1) {
        return;
    }
    for (int i = 0; i < len - 1; i++) {
        for (int j = len - 1; j > i; j--) {
            if (array[j - 1] > array[j]) {
                int tempVal = array[j - 1];
                array[j - 1] = array[j];
                array[j] = tempVal;
            }
        }
    }
}
```

@tab insert

```java
public void insertSort() {
    int len = array.length;
    if (len <= 1) {
        return;
    }
    for (int i = 0; i < len - 1; i++) {
        int targetIndex = i + 1;
        int targetValue = array[targetIndex];
        int j;
        for (j = 0; j < targetIndex; j++) {
            if (targetValue < array[j]) {
                break;
            }
        }

        for (int k = j; k < targetIndex; k++) {
            array[k + 1] = array[k];
        }
        array[j] = targetValue;

    }
}
```
:::