import requests
from bs4 import BeautifulSoup
import csv
def crawl(rawdata):
    page=BeautifulSoup(rawdata.content,'html.parser');
    data_tbody=page.find('tbody',id="ElectionResult")
    for div in data_tbody.find_all("div", {'class':'tooltip'}):
        div.decompose()
    for span in data_tbody.find_all("span"):
        span.decompose()
    def get_first_child(soup_page, child):
        first_child = soup_page.find(child)
        all_child = [first_child] + first_child.find_next_siblings(child)
        return all_child
    all_trs = get_first_child(data_tbody, 'tr')
    imp_trs = all_trs[4:]
    for tr in imp_trs:
        all_tds = get_first_child(tr, 'td')
        data_writer = csv.writer(f, delimiter=',');
        data_writer.writerow(['%s' % (all_tds[0].getText()), '%s' % (all_tds[1].getText()), '%s' % (all_tds[2].getText()), '%s' % (all_tds[3].getText()), '%s' % (all_tds[4].getText()), '%s' % (all_tds[5].getText()), '%s' % (all_tds[6].getText()), '%s' % (all_tds[7].getText()), '%s' % (all_tds[8].getText()), '%s' % (all_tds[9].getText()), '%s' % (all_tds[10].getText())])




page=[9,23,4,20,12]
states=["S26","S12","S16","S20","S29"]
k=len(page);
j=0;
for s in states:
    with open(""+s+".csv", 'w') as f:    
            for i in range(page[j]):
                print(i)
                if i == 0:
                    url ="http://eciresults.nic.in/statewise"+s+".htm?st="+s;
                else:
                    url= "http://eciresults.nic.in/statewise"+s+str(i)+".htm?st="+s+str(i);
                print(url);
                rawdata=requests.get(url);
                crawl(rawdata);
                
            j+=1;
            
        #k += 1;        



            
