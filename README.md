#News Infinite Scroll
Mit diesem Modul können Sie items aus einer Newsliste nach Domready nachladen. Sobald ein im Template definierter Anker peim Scrollen erreicht wurde, werden per Ajax die weiteren News-Artikel nachgeladen.

##Betrieb
Damit das Modul funktioniert, muss auf der gleichen Seite neben dem NewsInfiniteScoll-Modul ein gewöhnliches ContaoNewslistModul eingebettet sein. Hier definieren Sie, dass z.B. nur 5 Artikel angezeigt werden sollen (der Rest wird dann nach domready per Ajax nachgeladen).
Im InfiniteNewsScrollModul geben Sie dann an, dass die ersten 5 Artikel übersprungen werden.

Wenn alles richtig installiert wurde, werden nun die nachgeladenen Elemente zu den 5 bestehenden Artikeln angehängt. Weitere Einstellungen können im Template getätigt werden.


##Manual
![Frontend](manual/infiniteScroll_1.jpg?raw=true "Frontend")
So sieht es im Frontend aus. Wenn Beiträge geladen werden, wird dies mit "Loading" unten angezeigt. Der Text kann im Template angepasst werden oder durch ein Icon ersetzt werden.


![Backend](manual/infiniteScroll_2.jpg?raw=true "Backend")
Im Artikel müssen 2 Module eingebunden werden. Ein gewöhnliches Listing Modul mit den Beiträgen, die bei Domready bereits sichtbar sein müssen. Und ein NewsInfiniteScrollModul, das die restlichen Beiträge beim Hinunterscrollen vom Server per xhr-request nachlädt.


![Backend](manual/infiniteScroll_3.jpg?raw=true "Backend")
Das Core Listing Modul mit den nötigen Einstellungen.


![Backend](manual/infiniteScroll_4.jpg?raw=true "Backend")
Das NewsInfiniteScrollModul mit den nötigen Einstellungen.
Achtung!!! Steht die "Gesamtzahl der Beiträge" auf 0 und ist der Offset grösser als 0, lädt Contao standardmässig nur 30 Beiträge. Wenn alle Beiträge geladen werden sollen, muss beim Feld "Gesamtzahl der Beiträge" eine genügend grosse Zahl (maximum 65535) eingegeben werden.


![Backend](manual/infiniteScroll_5.jpg?raw=true "Backend")
Im Template können noch mehr Einstellungen getätigt werden.