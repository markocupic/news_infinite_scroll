#News Infinite Scroll
Mit diesem Modul können Sie items aus einer Newsliste nach Domready nachladen. Sobald ein im Template definierter Anker peim Scrollen erreicht wurde, werden per Ajax die weiteren News-Artikel nachgeladen.

##Betrieb
Damit das Modul funktioniert, muss auf der gleichen Seite neben dem NewsInfiniteScoll-Modul ein gewöhnliches ContaoNewslistModul eingebettet sein. Hier definieren Sie, dass z.B. nur 5 Artikel angezeigt werden sollen (der Rest wird dann nach domready per Ajax nachgeladen).
Im InfiniteNewsScrollModul geben Sie dann an, dass die ersten 5 Artikel übersprungen werden.

Wenn alles richtig installiert wurde, werden nun die nachgeladenen Elemente zu den 5 bestehenden Artikeln angehängt. Weitere Einstellungen können im Template getätigt werden.

