#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @CreateTime    : 2020/6/13 10:33
# @UpdateTime    : 2022/07/25 14:31:18
# @Author  : Leslie
# @FileName: filter_words.py
# @Software: PyCharm
# @Blog    ：https://leslie-dd.github.io/blog/

'''
articalToWords.py
功能：
    取文章中的单词到 SQLite数据库 test.db 的表 dictionary 中
'''
import sqlite3
import mysql.connector
import string
import re
import os
from filecmp import cmp

"""取出文章的所有单词----------------------------------------------------------------------------------"""
def read_from_file(filename):
    try:
        with open(filename, 'r', encoding='utf-8') as file:
            # lines = file.readlines()
            content = file.read()
    except FileNotFoundError:
        msg = 'Sorry, the file ' + filename + ' does not exist'
        print(msg)
    else:
        words = []
        # Python strip()方法用于移除字符串头尾指定的字符（默认为空格或换行符）或字符序列。
        # Python rstrip() 删除 string 字符串末尾的指定字符（默认为空格）.
        # string.punctuation：找出字符串中的所有的标点（针对英文）
        # for line in lines:
        #     line = line.strip('\n')
        #     line = line.strip(string.digits)
        #     line = line.strip(string.punctuation)
        #     line = line.rstrip(string.punctuation)
        #     for word in line.split():
        #         word = word.strip(string.punctuation)
        #         word = word.rstrip(string.punctuation)
        #         words.append(word)
        #         print (word)
        # print(words)
        # n_words = len(words)
        # print(n_words)

        # for word in content.split():
        #     word = word.strip(string.punctuation)
        #     word = word.rstrip(string.punctuation)
        #     word = word.strip('“')
        #     word = word.rstrip('”')
        #     word = word.strip(string.punctuation)
        #     word = word.rstrip(string.punctuation)
        #
        #     words.append(word)
        #     #print(word)

        #words = re.compile(r'\b[a-zA-Z\']+\b', re.I).findall(content)
        words = re.compile(r'[a-zA-Z]+', re.I).findall(content)
        print("总词数：", len(words))
    return words

"""对一篇文章的单词进行排序和去重-----------------------------------------------------------------------"""
def sort_words(words):
    words2 = []
    for word in words:
        word = word.lower()
        if word not in words2:
            words2.append(word)
    print("去重后：", len(words2))
    words2 = sorted(words2, key=str.lower)  # 对单词进行排序
    return words2

"""将字典中没有的单词添加到字典-------------------------------------------------------------------------"""
def add_into_dictionary(filename):
    print("\n")
    f = open(filename, "r", encoding='utf-8')   # 以只读形式打开要添加的单词文件
    all_words = f.readlines()   # 取所有要添加到字典中的所有单词
    f.close()
    print("去重前要添加的单词个数：", len(all_words))

    if not os.path.exists('dictionary.txt'):
        fff = open("dictionary.txt", "w", encoding='utf-8')
        fff.close()
    ff = open("dictionary.txt", "r", encoding='utf-8')
    dictionary_words_temp = ff.readlines()   # 取字典文件中的所有单词
    ff.close()
    dictionary_words = []
    for dictionary_word in dictionary_words_temp:
        dictionary_word = dictionary_word.rstrip('\n')
        dictionary_words.append(dictionary_word)
    print("字典中原本有的单词个数：", len(dictionary_words))

    waiting_for_add_to_dictionary = []  # 要添加到字典中的单词

    i = 0
    for word in all_words:
        word = word.rstrip('\n')
        if word not in dictionary_words:
            waiting_for_add_to_dictionary.append(word)

    print("去重后要添加的单词个数：", len(waiting_for_add_to_dictionary))
    write_into_file("dictionary.txt", waiting_for_add_to_dictionary, True)  # 以追加方式打开字典


""" flag标志着True以追加方式打开写入（字典dictionary.txt）还是False以覆盖方式打开（暂存单词文件words.txt)-------------"""
def write_into_file(filename, words, flag):
    if flag == True:
        f = open(filename, "a", encoding="utf-8")   # 以追加方式打开字典，添加单词
    elif flag == False:
        f = open(filename, "w", encoding="utf-8")   # 以覆盖方式打开暂存文件，添加单词
    for word in words:
        f.write("%s\n" % word)
    f.close()



"""将单词写入数据库表--------------------------------------------------------------------------------"""
def write_into_database(one_artical_words):
    cursor = mysql_db.cursor()
    cursor.execute(
        'create table if not exists dictionary(id  integer PRIMARY KEY auto_increment, word varchar(40), ismyword varchar(1))')
    i = 0
    for word in one_artical_words:
        # cursor.execute('select word from dictionary where word=?', [word])
        # if cursor.fetchall() == []:
            # cursor.execute('insert into dictionary(word) values(?)', [word])
            # i += 1
        cursor.execute('insert into dictionary(word) values(%s)', [word])
        i += 1
    print("添加数：", i)
    cursor.close()
    mysql_db.commit()

mysql_db = mysql.connector.connect(
        host="localhost",
        user="local_root",
        passwd="leslied1()",
        database="test"
    )
path = os.path.dirname(os.path.abspath(__file__)) + '/英文文章'
files = os.listdir(path) #获取文件夹下的所有文件名
list1 = []
for filename in files:
    print("-------------------------------------------\n文件名：", filename)
    filename = path + "/" + filename
    words_ = read_from_file(filename)
    words2_ = sort_words(words_)                # 对这篇文章中的单词进行去重和排序
    #write_into_file(filename2, words2_, False)  # 以覆盖方式暂存单词
    #add_into_dictionary(filename2)
    write_into_database(words2_)
    
mysql_db.close()
    
