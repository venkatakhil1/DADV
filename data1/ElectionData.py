import requests
import csv
from bs4 import BeautifulSoup
def crawl(url,arg1):
    page = requests.get(url);
    soup = BeautifulSoup(page.content, 'html.parser');
    table = soup.find('table', border="1");
    t_rows = table.find_all('tr', style="font-size:12px;");
    result = [];
    with open('%s.csv' % (arg1), 'w') as f:
        for row in t_rows:
            result = row.find_all('td');
            # print("<p>%s%s%s</p>" %(result[0].text.strip(),result[1].text.strip(),result[2].text.strip()));
            data_writer = csv.writer(f, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL);
            data_writer.writerow(['%s' % (result[0].text.strip()), '%s' % (result[1].text.strip()), '%s' % (result[2].text.strip())]);

constituency=[90,229,36,200,119];
state=["S26","S12","S16","S20","S29"];
count=0;
url_pattern="http://eciresults.nic.in/Constituencywise";
for number in constituency:
    for each_constituency in range(0+1,number+1):
        each_state=state[count];
        url=url_pattern+each_state+str(each_constituency)+".htm?ac="+str(each_constituency)
        arg1=each_state+str(each_constituency);
        crawl(url,arg1);
    count=count+1; 
