var config = {
    style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
    showMarkers: false,
    inset: false,
    theme: 'dark',
    use3dTerrain: false,
    auto: false,
    title: '🧬 Berlins DNA in Straßennamen',
    byline: 'Sören Etler, Open Data Analyst',
    footer: 'Datenquelle: <a href="https://daten.berlin.de/datensaetze/stra%C3%9Fenabschnitte-berlin" target="_blank">Straßenabschnitte RBS Berlin</a> (Amt für Statistik Berlin-Brandenburg, CC-BY-3.0) <br> Created using <a href="https://maplibre.org/maplibre-gl-js/docs/" target="_blank">MapLibre GL JS</a> + <a href="https://github.com/russellsamora/scrollama" target="_blank">Scrollama</a>.<br></br>by Sören Etler | <a href="https://soerenetler.de/de/page/impressum/" target="_blank">Impressum</a>',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            hidden: false,
            description: 'Straßennamen beschreiben nicht nur die Orte um uns herum, sondern bilden auch die kollektive DNA einer Stadt. Das gilt nirgends mehr als in Berlin. Hier schichten sich Geschichte auf Geschichte: preußische Königsstraßen, kaiserliche Triumphachsen, nationalsozialistische Umbenennungen, DDR-Prachtboulevards und der anhaltende Kampf um das Erinnern. Man kann sehr lange in Berlin leben, ohne Straßennamen zu kennen. Aber wenn man mit „Einheimischen" spricht, ist man immer wieder beeindruckt, wie fließend sie Orte anhand von Straßennamen beschreiben können.',
            location: {
                center: [13.405, 52.52],
                zoom: 10.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sonnenallee',
            alignment: 'right',
            hidden: false,
            title: 'Sonnenallee',
            // image: './assets/sonnenallee.jpg',
            description: 'Die <b>Sonnenallee</b> gehört zu den berühmtesten Straßen Berlins – nicht nur wegen des gleichnamigen Films über jenen kurzen Abschnitt, der in der DDR lag. Das Partyvolk fand und findet hier angesagte Locations, die vielen kleinen Lebensmittelgeschäfte erfüllen auch außergewöhnliche Wünsche. Vom Hermannplatz bis zum Baumschulenweg sind es knapp fünf Kilometer – angefangen hat alles ganz klein: 1880 auf dem sumpfigen Gebiet des damals eigenständigen Rixdorfs mit dem schlichten Namen Straße 84. Die Geschichte dieser berühmten Straße Berlins erzählt die Geschichte der Stadt, sogar des Landes. Wir haben die Sonnenallee ausführlich betrachtet – vom Feldweg zum Schmelztiegel.',
            location: {
                center: [13.447, 52.476],
                zoom: 13,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sonnenallee',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'sonnenallee',
                    opacity: 0,
                    duration: 5000
                }
            ]
        },
        {
            id: 'adlergestell',
            alignment: 'left',
            hidden: false,
            title: 'Adlergestell',
            // image: './assets/adlergestell.jpg',
            description: 'Die längste zusammenhängende benannte Straße Berlins heißt <b>Adlergestell</b> – und die meisten Berliner*innen könnten ihren Verlauf nicht einmal grob skizzieren. 13 Kilometer zieht sie sich durch Treptow-Köpenick, von Niederschöneweide bis an die Stadtgrenze. Ihr Name verweist auf einen alten Weg durch den Köpenicker Stadtforst. An ihr liegt Adlershof: Schauplatz der ersten deutschen Motorflüge 1909, später NS-Forschungsgelände, dann DDR-Fernsehzentrum, heute Wissenschaftsstadt und Medienstandort. Ähnlich wie Münchens Dachauer Straße – die über fünf Stadtbezirke zu einem Schloss im Umland führt – sind auch Berlins längste Straßen historische Sehnsuchtswege. Nur führen sie hier nicht zu Schlössern, sondern zu Zukunftsträumen.',
            location: {
                center: [13.535, 52.440],
                zoom: 12,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'adlergestell',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'adlergestell',
                    opacity: 0,
                    duration: 5000
                }
            ]
        },
        {
            id: 'karl-marx-allee',
            alignment: 'left',
            hidden: false,
            title: 'Karl-Marx-Allee',
            // image: './assets/karl-marx-allee.jpg',
            description: 'Die <b>Karl-Marx-Allee</b> ist Berlins ambivalentestes Straßendenkmal. Als „Stalinallee" 1949 angelegt, war sie der sozialistische Schaufensterboulevard der DDR – breit genug für Panzer, flankiert von monumentalen Wohnpalästen im Zuckerbäckerstil. 1961 umbenannt, als Stalins Kult auch im Osten bröckelte. Heute steht sie unter Denkmalschutz: nicht wegen des Namens, sondern wegen der Architektur. Am 17. Juni 1953 marschierten hier streikende Bauarbeiter – die Straße, die den Sozialismus verkörpern sollte, war Ausgangspunkt des Volksaufstands.',
            location: {
                center: [13.438, 52.517],
                zoom: 13,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'karl-marx-allee',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'karl-marx-allee',
                    opacity: 0,
                    duration: 5000
                }
            ]
        },
        {
            id: 'landsberger-allee',
            alignment: 'right',
            hidden: false,
            title: 'Landsberger Allee',
            description: 'Die <b>Landsberger Allee</b> ist nach Landsberg an der Warthe benannt – heute Gorzów Wielkopolski in Polen. Straßennamen konservieren Geographien, die längst verschwunden sind: die Landschaft vor dem Krieg, die Städte vor der Verschiebung der Grenzen. Auch München hat eine Landsberger Straße – benannt nach einem anderen Landsberg. Und Leipzig. Überall im Land laufen die alten Sehnsuchtswege in Schildern weiter, lange nachdem die Wege selbst Geschichte wurden. Sie alle stammen aus einer Zeit, als Straßennamen noch echte Wegweiser in die Welt waren.',
            location: {
                center: [13.468, 52.527],
                zoom: 12,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'landsberger-allee',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'landsberger-allee',
                    opacity: 0,
                    duration: 5000
                }
            ]
        },
        {
            id: 'kietz',
            alignment: 'right',
            hidden: false,
            title: 'Kietz',
            description: 'Berlin ist ein Millionendorf – und trägt die Dörfer noch in sich. Das Wort <b>Kietz</b>, heute Slang für das eigene Viertel, ist älter als die Stadt selbst: Es kommt vom slawischen „kez" und bezeichnete die Siedlungen der Wenden, bevor die Markgrafen aus Brandenburg das Land übernahmen. In Köpenick und Spandau gibt es noch Straßen, die diesen Namen tragen – stille Zeugen einer Zeit, als hier kein Deutsch gesprochen wurde. Wie Münchens Dorfstraße in Obermenzing zeigt der Berliner Kietz: Millionenstädte wachsen um ihre Dörfer herum, nicht über sie hinweg.',
            location: {
                center: [13.578, 52.443],
                zoom: 15,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 0,
                    duration: 5000
                }
            ]
        },
        {
            id: 'geister-strassen',
            alignment: 'center',
            hidden: false,
            title: '"Geisterhafte" Straßennamen',
            description: 'Auch Berlin kennt Straßen, die auf keinem Briefumschlag landen. Manchmal sind es Wege, die nur der Infrastruktur dienen – Zufahrten, Brücken, Tunnel. Manchmal sind es Relikte der Teilung: Straßen, die in West- und Ostberlin doppelt existierten und nach der Wende zwischen den Verwaltungen verschwanden. Irgendwie schade, dass sie nie das Privileg haben, auf einem Briefumschlag zu stehen.',
            location: {
                center: [13.405, 52.52],
                zoom: 10.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'geschichte',
            alignment: 'center',
            hidden: false,
            description: 'Ein (virtueller) Spaziergang durch Berlin mit einem Blick auf die Straßenschilder ist wie das Lesen eines Palimpsests: Immer wieder wurde überschrieben, aber die älteren Schichten scheinen durch. Preußen, Kaiserreich, Weimarer Republik, NS-Diktatur, Kalter Krieg, Wiedervereinigung – jede Epoche hat ihre Spuren hinterlassen. Und nicht immer wurden sie getilgt. <br>Und wir sind Teil dieser Geschichte und prägen die Identität weiter:',
            location: {
                center: [13.405, 52.52],
                zoom: 10.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'anton-wilhelm-amo-strasse',
            alignment: 'right',
            hidden: false,
            title: 'Anton-Wilhelm-Amo-Straße',
            // image: './assets/anton-wilhelm-amo.jpg',
            description: 'Straßennamen als Erinnerungskampf: Für Berlin passt besonders gut die Schicht aus NS-, DDR- und kolonialen Umbenennungen. Offiziell wird in Mitte ausdrücklich auf problematische NS- und DDR-Bezüge verwiesen; im <b>Afrikanischen Viertel</b> nennt der Bezirk konkrete Umbenennungen wie Nachtigalplatz, Lüderitzstraße, Petersallee und Mohrenstraße. Für letztere entschied das OVG am 9. Juli 2025, dass die Umbenennung in <b>Anton-Wilhelm-Amo-Straße</b> rechtmäßig ist. Anton Wilhelm Amo war ein Philosoph aus dem heutigen Ghana, der im 18. Jahrhundert in Deutschland lehrte – einer der ersten Schwarzen Akademiker Europas.',
            location: {
                center: [13.386, 52.511],
                zoom: 15.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'anton-wilhelm-amo-strasse',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'afrikanisches-viertel',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'anton-wilhelm-amo-strasse',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'afrikanisches-viertel',
                    opacity: 0,
                    duration: 5000
                }
            ]
        },
        {
            id: 'frauen',
            alignment: 'center',
            hidden: false,
            title: '',
            description: 'Ein aktuelles Thema ist auch die deutliche Unterrepräsentation von Frauen bei Straßennamen. Von den rund 14.000 Straßennamen Berlins tragen weniger als zehn Prozent weibliche Vornamen. Neuere Benennungen versuchen, dieses Ungleichgewicht langsam zu korrigieren – auch in Berlin gibt es entsprechende Initiativen und Vorgaben für Neubenennungen.',
            location: {
                center: [13.405, 52.52],
                zoom: 10.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'schmunzeln',
            alignment: 'center',
            hidden: false,
            title: '',
            description: 'Manchmal dürfen wir über Adressen auch einfach schmunzeln. Im Berliner Straßenregister finden sich schlicht <b>Weg A</b>, <b>Weg B</b>, <b>Weg C</b> – bis Weg G. Verwaltungslogik, die sich in den offiziellen Straßenkataster eingeschlichen hat. Und dann gibt es noch den <b>Kolk</b> in Spandau: eine mittelalterliche Gasse, eine der ältesten Berlins, versteckt zwischen Fachwerkhäusern – mit einem der kürzesten Namen der Stadt. Kuriosum im Nikolaiviertel: Die <b>Eiergasse</b> ist Berlins kürzeste Straße. Mit nur ca. 16 Metern Länge verbindet sie den Nikolaikirchplatz mit dem Mühlendamm. Heute beherbergt sie hauptsächlich Gastronomie-Außenflächen, darunter den Paddenwirt. Der Name stammt vermutlich von einem ehemaligen Eier-Markt in der Nähe.',
            location: {
                center: [13.201, 52.539],
                zoom: 17,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 0,
                    duration: 5000
                }
            ]
        },
        {
            id: 'ende',
            alignment: 'center',
            hidden: false,
            title: '',
            description: 'Straßennamen spiegeln nicht nur die große Geschichte wider. Wir alle haben einen persönlichen Bezug zu ihnen: Sicherlich erinnerst du dich noch an die Straße, in der du aufgewachsen bist? Diese abstrakten Daten sind für Menschen, die hier leben, sehr persönlich. Und so werden sie immer wieder zum Gegenstand von Debatten – weil Straßennamen nicht nur zeigen, wer war, sondern entscheiden, wen wir erinnern wollen.',
            location: {
                center: [13.405, 52.52],
                zoom: 10.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
