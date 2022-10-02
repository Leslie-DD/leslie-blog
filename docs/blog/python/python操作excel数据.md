---
editLink: false
comment: false
---

# Python处理Excel数据
 > 这两天晚上帮学经济的儿子从两个excel表中提取了些数据供他做数据分析。
 >
 > 第一次用python操作excel表，记录一下。
 > 
 > 单纯读取写入excel数据不难，关键是对数据又进一步提取了有效值。

 [调研数据.xlsx](/scripts/lzs/调研数据.xlsx)

 [预测信息1.xlsx](/scripts/lzs/预测信息1.xlsx)

 [预测信息2.xlsx](/scripts/lzs/预测信息2.xlsx)
 
 [预测信息3.xlsx](/scripts/lzs/预测信息3.xlsx)

 [lzs.py](/scripts/lzs/lzs.py)

 ```python
from functools import reduce
from logging.config import valid_ident
from multiprocessing import allow_connection_pickling
import pandas as pd
import time
import re
import copy


def printList(print_list):
    count = 1   
    for result in print_list:
        print("     ", count, result)
        count = count + 1
def deleteDuplicate(li):
    func = lambda x, y: x if y in x else x + [y]
    li = reduce(func, [[], ] + li)
    return li

def export_excel(export, file_name):
    print("输出结果到《%s》..."%(file_name))
    #将字典列表转换为DataFrame
    pf = pd.DataFrame(list(export))
    #指定字段顺序
    order = ['Stkcd','Ananm','InstitutionID','Brokern','YEAR','count']
    pf = pf[order]
    #将列名替换为中文
    columns_map = {
        'Stkcd':'Stkcd',
        'Ananm':'Ananm',
        'InstitutionID':'InstitutionID',
        'Brokern':'Brokern',
        'YEAR':'YEAR',
        'count':'count'
    }
    pf.rename(columns = columns_map,inplace = True)
    #指定生成的Excel表格名称
    file_path = pd.ExcelWriter(file_name)
    #替换空单元格
    pf.fillna(' ',inplace = True)
    #输出
    pf.to_excel(file_path,encoding = 'utf-8',index = False)
    #保存表格
    file_path.save()
    print("输出结果成功")

if __name__=="__main__":
    print("读取《调研数据.xlsx》...")
    all_start = time.time()
    df0 = pd.read_excel('调研数据.xlsx')
    # print(df0)
    all_list = df0.to_dict(orient='records')[0: 100]
    result_list = []
    for i in range (0, len(all_list)):
        all = all_list[i]
        researcher_list = all['Researcher'].split(';')
        for researcher in researcher_list:
            semicolon_index = researcher.find(':')
            if semicolon_index != -1:
                researcher = researcher[semicolon_index + 1:]
                researchers = researcher.split("、")
                
                for research in researchers:
                    all_copy = all.copy()
                    all_copy['Researcher'] = research;
                    result_list.append(all_copy)
                    # print(len(result_list), research, result_list[len(result_list)-1])
            else :
                all_copy = all;
                all_copy['Researcher'] = researcher;
                result_list.append(all_copy)
                # print(len(result_list), researcher, result_list[len(result_list)-1])
    # printList(result_list)
    print("读取《调研数据初始化》共[%d]条数据" %(len(result_list)))

    file_list = []
    file_list.append('预测信息1.xlsx')
    file_list.append('预测信息2.xlsx')
    file_list.append('预测信息3.xlsx')
    for file in file_list:
        start = time.time()
        print()
        print("读取《%s》..." %(file))
        df0 = pd.read_excel(file)
        # print(df1)
        data_list = df0.to_dict(orient='records')
        print("读取《%s》共[%d]条数据，开始统计..." %(file, len(data_list)))

        count = 0
        for data in data_list:
            data['count'] = 0
            # print(count / len(data_list))
            count = count + 1
            for result in result_list:
                if result['Researcher'] in str(data['Ananm']):
                    data['count'] = int(data['count']) + 1
        export_excel(data_list, "result_%s"%(file))

        valid_count = 0
        for data in data_list:
            if data['count'] != 0:
                valid_count = valid_count + 1
                # if (valid_count < 100) :
                #     print(data)
                    # print (data['Stkcd'], data['Ananm'], data['Brokern'], data['InstitutionID'], data['YEAR'], data['count'])
        print( "有效数据(count > 0)[%d]条，耗时[%.3fs]"%(valid_count, time.time() - start))
    print()
    print("总耗时[%d]s"%(time.time() - all_start))

 ```