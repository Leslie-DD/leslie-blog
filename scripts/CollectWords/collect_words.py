#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @CreateTime    : 2020/6/13 10:33
# @UpdateTime    : 2022/07/25 14:30:54
# @Author  : Leslie
# @FileName: collect_words.py
# @Software: PyCharm
# @Blog    ：https://leslie-dd.github.io/blog/

import sqlite3
import mysql.connector

from fake_useragent import UserAgent
from lxml import etree
from urllib import request

def get_translations(html_object):
    result_translations = []
    html_translation = html_object.xpath('//div[@class="qdef"]/ul/li/span')
    for i in range(0, len(html_translation), 2):
        translations = Translation(html_translation[i].text, html_translation[i + 1].xpath('span')[0].text)
        result_translations.append(translations)
    return result_translations
def get_phonetics(html_object):
    phonetic = []
    result_phonetics_usa = ""
    result_phonetics_uk = ""
    usa = html_object.xpath('//div[@class="hd_prUS b_primtxt"]/text()')
    for item in usa:
        result_phonetics_usa = item

    uk = html_object.xpath('//div[@class="hd_pr b_primtxt"]/text()')
    for item in uk:
        result_phonetics_uk = item
    phonetic.append(result_phonetics_usa)
    phonetic.append(result_phonetics_uk)
    return phonetic
def get_tenses(html_object):
    result_tense = []
    html_tenses = html_object.xpath('//div[@class="hd_div1"]/div[@class="hd_if"]')
    for tense in html_tenses:
        for j in range(0, len(tense.xpath('span'))):
            # ten = Tense(tense.xpath('span')[j].text, tense.xpath('a')[j].text)
            ten = []
            ten.append(tense.xpath('span')[j].text)
            ten.append(tense.xpath('a')[j].text)
            result_tense.append(ten)
            # print(tense.xpath('span')[j].text+"||"+tense.xpath('a')[j].text)
    return result_tense
def get_Colls(html_object):
    result_coll = []
    colid = html_object.xpath('//div[@id="colid"]/div[@class="df_div2"]/div')
    for i in range(0, len(colid), 2):
        coll = []
        coll.append(colid[i].text)
        content = []
        for k in range(0, len(colid[i + 1].xpath('a/span'))):
            content.append(colid[i + 1].xpath('a/span')[k].text)
        result = '; '.join(content)
        coll.append(result)
        result_coll.append(coll)
    return result_coll
def get_synonym(html_object):
    result_synonym = []
    synonym = html_object.xpath('//div[@id="synoid"]/div[@class="df_div2"]/div')
    for i in range(0, len(synonym), 2):
        syno = []
        syno.append(synonym[i].text)
        content = []
        for k in range(0, len(synonym[i + 1].xpath('a/span'))):
            content.append(synonym[i + 1].xpath('a/span')[k].text)
        result = '; '.join(content)
        syno.append(result)
        result_synonym.append((syno))
    return result_synonym
def get_antonym(html_object):
    result_antonym = []
    antonym = html_object.xpath('//div[@id="antoid"]/div[@class="df_div2"]/div')
    for i in range(0, len(antonym), 2):
        an = []
        an.append(antonym[i].text)
        content = []
        for k in range(0, len(antonym[i + 1].xpath('a/span'))):
            content.append(antonym[i + 1].xpath('a/span')[k].text)
        result = '; '.join(content)
        an.append(result)
        result_antonym.append(an)
    return result_antonym
def get_ec(html_object):
    E_C_cixing = html_object.xpath('//div[@id="crossid"]//div[@class="pos pos1"]')
    cixing = []
    for e_c in E_C_cixing:
        cixing.append(e_c.text)

    result_ec = []
    E_C_fanyiall = html_object.xpath('//div[@id="crossid"]//div[@class="def_fl"]')
    for i in range(len(E_C_fanyiall)):
        fanyi = E_C_fanyiall[i].xpath('div/div[2]/span/text()')
        strfanyi = '|'.join(fanyi)
        ec = []
        ec.append(cixing[i])
        ec.append(strfanyi)
        result_ec.append(ec)
    return result_ec
def get_examples(html_object):
    result_examples = []
    examples_e = html_object.xpath('//div[@class="sen_en b_regtxt"]')
    examples_cn = html_object.xpath('//div[@class="sen_cn b_regtxt"]')
    if len(examples_e) == len(examples_cn):
        exam = []
        for i in examples_e:
            shuchu = i.xpath('*/text()')
            result = ''.join(shuchu)
            exam.append(result)
        exam2 = []
        for i in range(len(examples_cn)):
            ex = []
            shuchu = examples_cn[i].xpath('*/text()')
            result = ''.join(shuchu)
            ex.append(exam[i])
            ex.append(result)
            result_examples.append(ex)
    else:
        print("例句原文和翻译个数不对等。")
    return result_examples

def get_advanced_ec2(html_object):
    result_advanced_ec = []
    advanced_ecs = html_object.xpath('//div[@class="se_lis"]//div[@class="def_pa"]')
    for advanced_ec in advanced_ecs:
        ecs = advanced_ec.xpath('*//text()')
        result = ''.join(ecs)
        result_advanced_ec.append(result)
        # print(result)
    return result_advanced_ec

def get_advanced_ec(html_object):
    get_liju_e = html_object.xpath('//div[@class="li_pos"]//div[@class="val_ex"]')
    get_liju_cn = html_object.xpath('//div[@class="li_pos"]//div[@class="bil_ex"]')
    get_len = len(get_liju_e)
    result_advanced_ec = []
    for i in range(get_len):
        liju = []
        liju.append(get_liju_e[i].text)
        liju.append(get_liju_cn[i].text)
        result_advanced_ec.append(liju)
    return result_advanced_ec
def create_table():
    # conn = sqlite3.connect('/Users/leslie/Coding/Python/CollectWords/英文文章/test.db')
    
    cursor = mysql_db.cursor()
    cursor.execute(
        'create table if not exists phonetics(id  integer PRIMARY KEY auto_increment, word varchar(80), usa varchar(100), uk varchar(100))')
    cursor.execute(
        'create table if not exists translations(id  integer PRIMARY KEY auto_increment, word varchar(80), partofspeech varchar(400), trans varchar(400))')
    cursor.execute(
        'create table if not exists tenses(id  integer PRIMARY KEY auto_increment, word varchar(80), tensetype varchar(80), tenseword varchar(40))')
    cursor.execute(
        'create table if not exists coll(id  integer PRIMARY KEY auto_increment, word varchar(80), partofspeech varchar(80), content varchar(400))')
    cursor.execute(
        'create table if not exists synonym(id  integer PRIMARY KEY auto_increment, word varchar(80), partofspeech varchar(80), content varchar(400))')
    cursor.execute(
        'create table if not exists antonym(id  integer PRIMARY KEY auto_increment, word varchar(80), partofspeech varchar(80), content varchar(400))')
    cursor.execute(
        'create table if not exists advancedecs(id  integer PRIMARY KEY auto_increment, word varchar(80), en_cn varchar(800))')
    cursor.execute(
        'create table if not exists ec(id  integer PRIMARY KEY auto_increment, word varchar(80), partofspeech varchar(80), content varchar(400))')
    cursor.execute(
        'create table if not exists examples(id  integer PRIMARY KEY auto_increment, word varchar(80), en varchar(800), cn varchar(800))')

    #print(cursor.rowcount)  # reusult 1
    cursor.close()
    

class Translation:
    def __init__(self, partOfSpeech, trans:str):
        self.partOfSpeech = partOfSpeech
        self.trans = trans
class Tense:
    def _init_(self, type, word):
        self.type = type
        self.word = word
class Phonetics:
    def _init_(self, usa, uk):
        self.usa = usa
        self.uk = uk
def main():
    words = []
    cursor = mysql_db.cursor()
    cursor.execute('select word from dictionary')
    for cur in cursor:
        words.append(cur[0])
    cursor.close()
    mysql_db.commit()
    for word in words:
        cursor = mysql_db.cursor()
        word = word.rstrip()
        print('**********************************************\n' + word)
        ua = UserAgent()
        headers = {
            'User-Agent': ua.random
        }
        if True:
            url = 'http://cn.bing.com/dict/search?q=' + word
            req = request.Request(url, None, headers)
            data = ''
            with request.urlopen(req) as uf:
                while True:
                    data_temp = uf.read(1024)
                    if not data_temp:
                        break
                    data += data_temp.decode('utf-8', 'ignore')

            if data:
                html_object = etree.HTML(data)                  # 转换为html对象，以便进行path查找
                last_html_data = etree.tostring(html_object)    # 补全网页字符串
                html_object = etree.HTML(last_html_data)        # 再次转换为html对象，以便进行path查找
                # -------------------------------音标---------------------------------------------------------------------
                phonetics_result = get_phonetics(html_object)
                print(phonetics_result)
                phonetics_result[0]= phonetics_result[0].replace('\'', '#')
                phonetics_result[0]= phonetics_result[0].replace('#', '\'\'')
                phonetics_result[1]= phonetics_result[1].replace('\'', '#')
                phonetics_result[1]= phonetics_result[1].replace('#', '\'\'')
                insert_phonetic = 'insert into phonetics (word, usa, uk) values (\'' + word + '\',' + '\'' + phonetics_result[0] + '\',' + '\'' + phonetics_result[1] + '\')'
                # print(insert)
                cursor.execute(insert_phonetic)
                print("------------------------")
                # -------------------------------翻译---------------------------------------------------------------------
                translations_result = get_translations(html_object)
                for trans in translations_result:
                    print(trans.partOfSpeech, trans.trans)
                    # 这里knife单词有时可能会取到NoneType这种类型，所以进行类型转换。不知道是不是因为bing词典的缘故
                    trans.trans = str(trans.trans).replace('\'', '#')
                    trans.trans = trans.trans.replace('#', '\'\'')
                    insert_trans = 'insert into translations (word, partofspeech, trans) values (\'' + word + '\',' + '\'' + trans.partOfSpeech + '\',' + '\'' + trans.trans + '\')'
                    cursor.execute(insert_trans)
                print("------------------------")
                # -------------------------------时态---------------------------------------------------------------------
                tenses_result = get_tenses(html_object)
                for tense in tenses_result:
                    print(tense)
                    tense[1] = tense[1].replace('\'', '#')
                    tense[1] = tense[1].replace('#', '\'\'')
                    insert_tense = 'insert into tenses (word, tensetype, tenseword) values (\'' + word + '\',' + '\'' + tense[0] + '\',' + '\'' + tense[1] + '\')'
                    cursor.execute(insert_tense)
                print("------------------------")
                # -------------------------------Coll---------------------------------------------------------------------
                print("Coll.")
                Coll_result = get_Colls(html_object)
                for co in Coll_result:
                    print(co)
                    insert_coll = 'insert into coll (word, partofspeech, content) values (\'' + word + '\',' + '\'' + \
                                   co[0] + '\',' + '\'' + co[1] + '\')'
                    cursor.execute(insert_coll)
                print("------------------------")
                # -------------------------------近义词---------------------------------------------------------------------
                print("Synonym.")
                synonym_reslut = get_synonym(html_object)
                for sy in synonym_reslut:
                    print(sy)
                    sy[1] = sy[1].replace('\'', '#')
                    sy[1] = sy[1].replace('#', '\'\'')
                    insert_synonym = 'insert into synonym (word, partofspeech, content) values (\'' + word + '\',' + '\'' + \
                                  sy[0] + '\',' + '\'' + sy[1] + '\')'
                    # print(insert_synonym)
                    cursor.execute(insert_synonym)
                print("------------------------")
                # -------------------------------反义词---------------------------------------------------------------------
                print("Antonym.")
                antonym_result = get_antonym(html_object)
                for ant in antonym_result:
                    print(ant)
                    insert_antonym = 'insert into antonym (word, partofspeech, content) values (\'' + word + '\',' + '\'' + \
                                     ant[0] + '\',' + '\'' + ant[1] + '\')'
                    cursor.execute(insert_antonym)
                print("------------------------")
                # -------------------------------Advanced E-C---------------------------------------------------------------------
                # print("Advanced E-C")
                # advanced_ec_result = get_advanced_ec(html_object)
                # for adec in advanced_ec_result:
                #     print(adec)
                #     adec[0] = adec[0].replace('\'', '#')
                #     adec[0] = adec[0].replace('#', '\'\'')
                #     adec[1] = adec[1].replace('\'', '#')
                #     adec[1] = adec[1].replace('#', '\'\'')
                #     insert_advanced = 'insert into advancedec (word, en, cn) values (\'' + word + '\',' + '\'' + \
                #                      adec[0] + '\',' + '\'' + adec[1] + '\')'
                #     cursor.execute(insert_advanced)
                # print("------------------------")

                print("AdvancedEC")
                advanced_ec_result = get_advanced_ec2(html_object)
                for adec in advanced_ec_result:
                    print(adec)
                    adec = adec.replace('\'', '#')
                    adec = adec.replace('#', '\'\'')
                    # print(adec)
                    insert_advanced = 'insert into advancedecs (word, en_cn) values (\'' + word + '\',' + '\'' + adec + '\')'
                    cursor.execute(insert_advanced)
                print("------------------------")
                # -------------------------------E-C---------------------------------------------------------------------
                print("E-C")
                ec_result = get_ec(html_object)
                for ee in ec_result:
                    print(ee)
                    ee[1] = ee[1].replace('\'', '#')
                    ee[1] = ee[1].replace('#', '\'\'')
                    insert_ec = 'insert into ec (word, partofspeech, content) values (\'' + word + '\',' + '\'' + \
                                     ee[0] + '\',' + '\'' + ee[1] + '\')'
                    # print(insert_ec)
                    cursor.execute(insert_ec)
                print("------------------------")

                # -------------------------------Sample Examples---------------------------------------------------------------------
                print("例句")
                example_result = get_examples(html_object)
                for exam in example_result:
                    print(exam)
                    exam[0] = exam[0].replace('\'', '#')
                    exam[0] = exam[0].replace('#', '\'\'')
                    exam[1] = exam[1].replace('\'', '#')
                    exam[1] = exam[1].replace('#', '\'\'')
                    insert_example = 'insert into examples (word, en, cn) values (\'' + word + '\',' + '\'' + \
                                      exam[0] + '\',' + '\'' + exam[1] + '\')'
                    cursor.execute(insert_example)
        cursor.close()
        mysql_db.commit()

if __name__ == '__main__':
    mysql_db = mysql.connector.connect(
        host="localhost",
        user="local_root",
        passwd="leslied1()",
        database="test"
    )
    create_table()
    main()
    mysql_db.commit()
    mysql_db.close()


