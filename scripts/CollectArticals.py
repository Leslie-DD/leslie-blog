#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Author  : LeslieD
# @FileName: CollectArticals.py
# @Software: Visual Studio Code
# @Blog    : https://blog.csdn.net/qq_40313347
# @CreateTime   : 2020/7/20 9:45 pm
# @UpdateTime   : 2022/1/19 2:14 pm
# @Description  : 爬文章  并分类

import pymysql
import requests
from fake_useragent import UserAgent
from lxml import etree
from urllib import request
import re

db_host = '127.0.0.1'
db_user = 'root'
db_pwd = 'lesliedd0!'
db_database = 'readingtest'
server_dir = '/Users/leslied/Desktop/'

# db_host = '49.232.136.151'
# db_user = 'reading'
# db_pwd = 'reading'
# db_database = 'english_reading'
# server_dir = '/home/ubuntu/reading_pictures/'


def replace_quote(sentence):
    sentence = sentence.replace('\\', '\\\\')
    return sentence

urls = []
urls.append('http://www.chinadaily.com.cn/business/tech')   # 1 科技
urls.append('http://www.chinadaily.com.cn/culture/art')     # 2 艺术
urls.append('http://www.chinadaily.com.cn/business/money')  # 3 金融
urls.append('http://www.chinadaily.com.cn/sports/basketball')   # 4 篮球
urls.append('http://www.chinadaily.com.cn/world/america')   # 5 美国
urls.append('http://www.chinadaily.com.cn/world/europe')    # 6 欧洲
urls.append('http://www.chinadaily.com.cn/china/society')   # 7 社会
for urlnum in range(len(urls)):
    print("****************************分类：", urlnum+1)
    ua = UserAgent()
    headers = {
        'User-Agent': ua.random
    }
    if True:
        req = request.Request(urls[urlnum], None, headers)
        data = ''
        with request.urlopen(req) as uf:
            while True:
                data_temp = uf.read(1024)
                if not data_temp:
                    break
                data += data_temp.decode('utf-8', 'ignore')

        if data:
            html_object = etree.HTML(data)  # 转换为html对象，以便进行path查找
            last_html_data = etree.tostring(html_object)  # 补全网页字符串
            html_object = etree.HTML(last_html_data)  # 再次转换为html对象，以便进行path查找

            articals = []
            addresses = html_object.xpath(
                '//span[@class="tw3_01_2_t"]//a/@href')

            items = html_object.xpath('//div[@class="mb10 tw3_01_2"]')
            if len(items) == 0:
                items = html_object.xpath('//div[@class="mb10 tw3_01_2 "]')
            print("len(items): ", len(items))

            i = 1
            for item in items:
                ite = item.xpath('*')
                print("len(ite): ", len(ite))
                if len(ite) == 2:
                    image_url = item.xpath('*//img/@src')
                    address_url = ite[1].xpath('*//a/@href')
                    if len(image_url) == 1 and len(address_url) == 1:
                        image = 'http:'+image_url[0]
                        address = 'http:'+address_url[0]
                        print(image)
                        print(address)
                        server_image_path = 'images/' + image[image.rfind('/')+1:]
                        server_image_absolute_path = server_dir + server_image_path
                        print(server_image_absolute_path)

                        # print(i, '. ', address)
                        userAgent = UserAgent()
                        headers2 = {
                            'User-Agent': userAgent.random
                        }
                        if True:
                            req2 = request.Request(address, None, headers2)
                            data2 = ''
                            with request.urlopen(req2) as uf:
                                while True:
                                    data_temp2 = uf.read(1024)
                                    if not data_temp2:
                                        break
                                    data2 += data_temp2.decode('utf-8',
                                                               'ignore')

                            if data2:
                                html_object2 = etree.HTML(
                                    data2)  # 转换为html对象，以便进行path查找
                                last_html_data2 = etree.tostring(
                                    html_object2)  # 补全网页字符串
                                # 再次转换为html对象，以便进行path查找
                                html_object2 = etree.HTML(last_html_data2)
                                titles = html_object2.xpath(
                                    '//*[@class="lft_art"]/h1')
                                if(len(titles) == 1):

                                    contents = html_object2.xpath(
                                        '//*[@id="Content"]/p//text()')
                                    content_all = ""
                                    # for content in contents:
                                    # if content.text != None:
                                    #     # content_text = str(content.text).replace('<br>', '\n')
                                    #     # print(content_text)
                                    #     content_all = content_all + '\n' + content.text
                                    for content_text in contents:
                                        if content_text != None:
                                            # print(content_text)
                                            content_all = content_all + '\n' + content_text

                                    if(len(content_all) < 50000 and len(content_all) > 100):
                                        title_text_0 = titles[0].text
                                        title_text_0 = title_text_0.strip('\n')
                                        title_text_0 = title_text_0.strip()
                                        title_text_0 = title_text_0.rstrip()
                                        title_text_0 = title_text_0.rstrip('\n')
                                        title_text_0 = title_text_0.strip('\n')
                                        title_text_0 = title_text_0.strip()
                                        title_text_0 = title_text_0.rstrip()
                                        title_text_0 = title_text_0.rstrip('\n')
                                        title_text = title_text_0
                                        title_text = title_text.replace('\'', '#')
                                        title_text = title_text.replace('#', '\'\'')

                                        # print(i, '. ', address, " ", len(address))
                                        print(i, '. ', len(address))
                                        len_words = len(re.compile(
                                            r'([a-zA-Z]+)(\'*)([a-zA-Z]*)', re.I).findall(content_all))
                                        print("总词数：", len_words)
                                        content_all = content_all.strip('\n')
                                        content_all = content_all.replace('\'', '#')
                                        content_all = content_all.replace('#', '\'\'')
                                        print('[', title_text_0, '] \n字符数', len(content_all))
                                        # print(content_all)

                                        conn = pymysql.connect(host=db_host, user=db_user, password=db_pwd, db=db_database,
                                                               port=3306, charset='utf8mb4')
                                        cursor = conn.cursor()
                                        sql0 = u"select title from articals where title=%s"
                                        cursor.execute(sql0, [title_text_0])
                                        if not cursor.fetchone():
                                            print("添加数据库")
                                            r = requests.get(image)
                                            with open(server_image_absolute_path, 'wb') as f:
                                                f.write(r.content)
                                            # server_image_absolute_path = replace_quote(server_image_absolute_path)
                                            insert_articals = \
                                                'insert into articals ' \
                                                '(time, date, wordcount, title, content, address,image, typeid) ' \
                                                'values (current_time(),current_date(),' + str(len_words) + ',\'' + title_text + '\',' + '\'' + \
                                                content_all + '\',' + '\'' + address + '\',' + '\'' + \
                                                server_image_path + '\',' + \
                                                '' + str(urlnum+1) + ')'
                                            # print(str(insert_articals))
                                            cursor.execute(insert_articals)
                                        else:
                                            print("已存在了")
                                        cursor.close()
                                        conn.commit()
                                        conn.close()
                                    artical = []
                        i += 1
