var config = {
    style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
    showMarkers: false,
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '🧬 Münchens DNA in Straßennamen',
    //subtitle: 'Mehr als nur eine Adresse',
    byline: 'Sören Etler, Open Data Analyst',
    footer: 'Datenquelle: <a href="https://opendata.muenchen.de/dataset/baut_strassenabschnitte_wu" target="_blank">Straßennetzgraf Baureferat Tiefbau</a>, <a href="https://opendata.muenchen.de/dataset/adressen_opendata" target="_blank">Münchner Adressen</a> <br> Created using <a href="https://maplibre.org/maplibre-gl-js/docs/" target="_blank">MapLibre GL JS</a> + <a href="https://github.com/russellsamora/scrollama" target="_blank">Scrollama</a>.<br></br>by Sören Etler | <a href="https://soerenetler.de/de/page/impressum/" target="_blank">Impressum</a>',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            hidden: false,
            // title: 'San Francisco',
            // image: './assets/san-fran.jpeg',
            description: 'Straßennamen beschreiben nicht nur die Orte um uns herum, sondern bilden auch die kollektive DNA einer Stadt. Man kann sehr lange in einer Stadt leben, ohne Straßennamen zu kennen. Aber wenn man mit “Einheimischen” spricht, bin ich immer wieder beeindruckt, wie fließend sie Orte anhand von Straßennamen beschreiben können. Sie beschreiben mögliche Routen mit den Namen der Magistralen, über die sie führen.',
            location: {
                center: [11.542207, 48.156532],
                zoom: 10.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'schleissheimer_strasse',
            alignment: 'right',
            hidden: false,
            title: 'Schleißheimer Str.',
            image: './assets/Goldschmiedplatz_Hasenbergl_München-3.jpg',
            description: 'Der <b>Schleißheimer Str.</b> sind mit 499 Adressen die meisten Adressen zugeordnet - come on 500 sollten doch drin sein. Sie ist nach dem nördlichen Vorort Oberlschleißheim benannt und endete ursprünglich an der Schlossanlage Schleißheim.<br><br> Bildquelle: Rufus46 / Wikimedia Commons, CC BY-SA 3.0',
            location: {
                center: [11.593, 48.184],
                zoom: 12,
                pitch: 20,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'schleissheimer-str',
                     opacity: 1,
                     duration: 5000
                }],
            onChapterExit: [
                {
                     layer: 'schleissheimer-str',
                     opacity: 0,
                     duration: 5000
                }
            ]
        },
        {
            id: 'dachauer-strasse',
            alignment: 'left',
            hidden: false,
            title: 'Dachauer Str.',
            image: './assets/Dachauer_Straße_in_Moosach,_München.jpg',
            description: 'Ähnlich verhält es sich auch mit der längsten Straße Münchens: der <b>Dachauer Str.</b>. Sie trägt ihren Namen, weil sie München mit dem Schloss Dachau verbindet und ist auch die einzige Straße, die auf ihrem Weg fünf Stadtbezirke verbindet. Die längsten Straßen sind also historische Sehnsuchtswege, die uns seit Jahrhunderten zu den Schlössern im Umland führen.<br><br> Bildquelle: Muenchnernorden / Wikimedia Commons, CC BY-SA 2.5',
            location: {
                center: [11.488, 48.173],
                zoom: 12,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'dachauer-str',
                     opacity: 1,
                     duration: 5000
                }],
            onChapterExit: [
                {
                     layer: 'dachauer-str',
                     opacity: 0,
                     duration: 5000
                }]
        },
        {
            id: 'landsberger-strasse',
            alignment: 'right',
            hidden: false,
            title: 'Landsberger Str.',
            image: './assets/Ehem._Hauptzollamt_München.jpg',
            description: 'Die <b>Landsberger Str.</b> findet sich auf Platz drei der längsten Straßen wieder - benannt nach Landsberg am Lech verläuft sie parallel zu den Bahngleisen zwischen dem Hauptbahnhof Richtung Westen bis nach Pasing. Sie ist auch in anderen Städten bekannt. In Berlin ist die Landsberger Allee ebenfalls eine der längsten Straßen, wurde jedoch hier nach der brandenburgischen Kleinstadt Altlandsberg benannt. Auch in Leipzig findet sich die Landsberger Str. - Namensgeber war Landsberg in Sachsen-Anhalt. Sie alle stammen aus einer Zeit, als Straßennamen noch echte Wegweiser in die Welt waren.<br><br> Bildquelle: Maximilian Dörrbecker / Wikimedia Commons, CC BY-SA 2.5',
            location: {
                center: [11.503, 48.146],
                zoom: 12.5,
                pitch: 20,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'ladsberger-str',
                     opacity: 1,
                     duration: 5000
                }
            ],
            onChapterExit: [
                {
                     layer: 'ladsberger-str',
                     opacity: 0,
                     duration: 5000
                }
            ]
        },
        {
            id: 'dorfstrasse',
            alignment: 'right',
            hidden: false,
            title: 'Dorfstraße',
            // image: './assets/buenos-aires.jpg',
            description: 'Doch bei allen großen Straßen und einem schier unendlichen Straßennetz bleibt München dennoch ein Millionendorf - sogar mit <b>Dorfstraße</b> im Stadtbezirk Obermenzing, der seit der Eingemeindung 1938 zu München gehört.',
            location: {
                center: [11.464, 48.167],
                zoom: 15,
                pitch: 20,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'dorfstr',
                     opacity: 1,
                     duration: 5000
                },
                {
                     layer: 'mapbox-satellite',
                     opacity: 1,
                     duration: 5000
                }
            ],
            onChapterExit: [
                {
                     layer: 'dorfstr',
                     opacity: 0,
                     duration: 5000
                },
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
            title: '"geisterhafte" Straßennamen',
            // image: './assets/buenos-aires.jpg',
            description: 'Als Wegweiser dienen auch die 550 "geisterhaften" Straßennamen ohne jede Adresse. Sie leiten den Verkehr wie die Max-Born-Str. (eine Ein- und Ausfallstraße im Stadtbezirk Moosach) oder die Donnersbergerbrücke (ich glaube, ihre Position ist allen bekannt). Irgendwie schade, dass sie nie das Privileg haben, auf einem Briefumschlag zu stehen.',
            location: {
                center: [11.542207, 48.156532],
                zoom: 10.5,
                pitch: 20,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'geister-strassen',
                     opacity: 1,
                     duration: 5000
                }
            ],
            onChapterExit: [
                {
                     layer: 'geister-strassen',
                     opacity: 0,
                     duration: 5000
                }
            ]
        },
        {
            id: 'platz-der-opfer-des-nationalsozialismus',
            alignment: 'right',
            hidden: false,
            title: 'Platz der Opfer des Nationalsozialismus',
            image: './assets/Platz_der_opfer_des_nationalsozialismus_0479.JPG',
            description: 'Auch bei der Benennung des <b>Platzes der Opfer des Nationalsozialismus</b> 1946 -  damals hochumstritten - wurde auf eine Zuordnung von Briefanschriften verzichtet. Dieser Platz am Rande der Altstadt trägt übrigens mit 39 Zeichen den längsten Namen unter allen Straßen in München. <br><br> Bildquelle: Henning Schlottmann / Wikimedia Commons, CC BY-SA 4.0',
            location: {
                center: [11.574, 48.143],
                zoom: 15.5,
                pitch: 20,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'platz-der-opfer-des-nationalsozialismus',
                     opacity: 1,
                     duration: 5000
                },
                {
                     layer: 'mapbox-satellite',
                     opacity: 1,
                     duration: 5000
                }],
            onChapterExit: [
                {
                     layer: 'platz-der-opfer-des-nationalsozialismus',
                     opacity: 0,
                     duration: 5000
                },
                {
                     layer: 'mapbox-satellite',
                     opacity: 0,
                     duration: 5000
                }
            ]
        },
        {
            id: 'geschichte',
            alignment: 'center',
            hidden: false,
            // title: 'Platzes der Opfer des Nationalsozialismus',
            // image: './assets/buenos-aires.jpg',
            description: 'Ein (virtueller) Spaziergang durch München mit einem Blick auf die Straßenschilder ist wie das Blättern in einem Geschichtsbuch. Jeder Name ist ein Puzzleteil, das – zusammengesetzt – die komplexe und sich ständig wandelnde Identität der Stadt offenbart. <br>Und wir sind Teil dieser Geschichte und prägen die Identität weiter:',
            location: {
                center: [11.542207, 48.156532],
                zoom: 10.5,
                pitch: 20,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'kolonialismus',
            alignment: 'links',
            hidden: false,
            title: 'Koloniale Straßennamen',
            // image: './assets/buenos-aires.jpg',
            description: 'In jüngster Zeit gibt es verstärkte Debatten über Straßennamen, die Personen aus der deutschen Kolonialgeschichte ehren, die heute kritisch gesehen werden. Es gibt hier ein umfangreiches Informationsangebot unter mapping.postkolonial.net <br>Das Stadtarchiv hat 2021 eine Liste mit 45 Straßennamen mit “erhöhtem Diskussionsbedarf“ veröffentlicht.',
            location: {
                center: [11.542207, 48.156532],
                zoom: 10.5,
                pitch: 20,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'strassennamen-mit-erhoehtem-diskussionsbedarf',
                     opacity: 1,
                     duration: 5000
                }
            ],
            onChapterExit: [
                {
                     layer: 'strassennamen-mit-erhoehtem-diskussionsbedarf',
                     opacity: 0,
                     duration: 5000
                },
            ]
        },
        {
            id: 'frauen',
            alignment: 'center',
            hidden: false,
            title: '',
            // image: './assets/buenos-aires.jpg',
            description: 'Ein aktuelles Thema ist auch die deutliche Unterrepräsentation von Frauen bei Straßennamen. Neuere Benennungen versuchen, dieses Ungleichgewicht langsam zu korrigieren.<br> <br>Das Portal zur Münchner Stadtgeschichte hat hier eine anschauliche Visualisierung erstellt, auf die ich gerne verlinke.',
            location: {
                center: [11.542207, 48.156532],
                zoom: 10.5,
                pitch: 20,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [,
            ]
        },
        {
            id: 'schmunzeln',
            alignment: 'center',
            hidden: false,
            title: '',
            // image: './assets/buenos-aires.jpg',
            description: 'Manchmal dürfen wir über Adressen aber auch einfach schmunzeln. <br><br>Die wohl verwirrendste Anschrift Münchens findet sich Auf den <b>Schrederwiesen 65</b>. Die Nummerierung wird hier durch Buchstaben ergänzt. An dieser Adresse ist also von A bis Z alles vorhanden. Es findet sich nicht nur der Zusatz “a” oder “b”, wie an vielen anderen Orten auch. Die Kette wird hier bis zum Buchstaben “z” fortgeführt.',
            location: {
                center: [11.492, 48.205],
                zoom: 17,
                pitch: 20,
                bearing: 0.00
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
            // image: './assets/buenos-aires.jpg',
            description: 'Straßennamen spiegeln nicht nur die große Geschichte wider. Wir alle haben einen persönlichen Bezug zu Straßennamen: Sicherlich erinnerst du dich noch an die Straße, in der du aufgewachsen bist? Diese abstrakten Daten sind für Menschen, die hier leben, sehr persönlich. Und so kennen wir auch viele ihrer Namen.',
            location: {
                center: [11.542207, 48.156532],
                zoom: 10.5,
                pitch: 20,
                bearing: 0.00
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
        }
    ]
};
