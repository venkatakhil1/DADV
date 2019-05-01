import requests
from bs4 import BeautifulSoup
import csv

def crawl(rawdata):
    page=BeautifulSoup(rawdata.content,'html.parser');
    data_tbody=page.find('table', border="1");
    trows=data_tbody.findAll('tr',style="font-size:12px;");
    for tr in trows:
        all_tds = tr.findAll('td')
        #print(all_tds)
        data_writer = csv.writer(f, delimiter=',');
        data_writer.writerow(['%s' % (all_tds[0].getText()), '%s' % (all_tds[1].getText())])

states=["S26","S12","S16","S20","S29"]
for s in states:
    with open(""+s+"pw"+".csv", 'w') as f:
        url ="http://eciresults.nic.in/PartyWiseResult"+s+".htm?st="+s;
        #print(url)
        rawdata=requests.get(url);
        crawl(rawdata);
