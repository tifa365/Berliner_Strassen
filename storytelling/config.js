var config = {
  style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
  showMarkers: false,
  inset: false,
  theme: "dark",
  use3dTerrain: false,
  auto: false,
  title: "🧬 Berlins DNA in Straßennamen",
  byline: "",
  footer:
    'Datenquelle: <a href="https://daten.berlin.de/datensaetze/stra%C3%9Fenabschnitte-berlin" target="_blank">Straßenabschnitte RBS Berlin</a> (Amt für Statistik Berlin-Brandenburg, CC-BY-3.0) <br> Created using <a href="https://maplibre.org/maplibre-gl-js/docs/" target="_blank">MapLibre GL JS</a> + <a href="https://github.com/russellsamora/scrollama" target="_blank">Scrollama</a>.<br></br>by Sören Etler | <a href="https://soerenetler.de/de/page/impressum/" target="_blank">Impressum</a>',
  chapters: [
    {
      id: "intro",
      alignment: "center",
      hidden: false,
      description:
        'Straßennamen beschreiben nicht nur die Orte um uns herum, sondern bilden auch die kollektive DNA einer Stadt. Das gilt nirgends mehr als in Berlin. Hier schichten sich Geschichte auf Geschichte: preußische Königsstraßen, kaiserliche Triumphachsen, nationalsozialistische Umbenennungen, DDR-Prachtboulevards und der anhaltende Kampf um das Erinnern. Man kann sehr lange in Berlin leben, ohne Straßennamen zu kennen. Aber wenn man mit „Einheimischen" spricht, ist man immer wieder beeindruckt, wie fließend sie Orte anhand von Straßennamen beschreiben können.',
      location: {
        center: [13.405, 52.52],
        zoom: 10.5,
        pitch: 20,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "all-streets-overview-case",
          opacity: 0,
          duration: 1200,
        },
        {
          layer: "all-streets-overview",
          opacity: 1,
          duration: 1200,
        },
      ],
      onChapterExit: [
        {
          layer: "all-streets-overview-case",
          opacity: 0,
          duration: 1200,
        },
        {
          layer: "all-streets-overview",
          opacity: 0,
          duration: 1200,
        },
      ],
    },
    {
      id: "adlergestell",
      alignment: "left",
      hidden: false,
      title: "Adlergestell",
      // image: './assets/adlergestell.jpg',
      description:
        "Im Berliner Straßenregister ist das <b>Adlergestell</b> mit rund <b>13,3 Kilometern</b> die längste zusammenhängend erfasste Straße. Sie verläuft durch <b>Treptow-Köpenick</b> und macht sichtbar, wie weit sich Berlin im Südosten ausdehnt. In den verknüpften Berliner Adressdaten hängen <b>212 Adressen</b> an dieser Straße; das entspricht <b>Rang 85</b> unter den Straßen der Stadt. Das ist wohlgemerkt ein Adress-Ranking, kein direktes Maß für Einwohnerinnen und Einwohner.",
      location: {
        center: [13.535, 52.44],
        zoom: 12,
        pitch: 20,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "adlergestell",
          opacity: 1,
          duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: "adlergestell",
          opacity: 0,
          duration: 5000,
        },
      ],
    },
    {
      id: "kuerzeste-strasse",
      alignment: "center",
      hidden: false,
      title: "Die kürzeste Straße",
      description:
        "Ein Berliner Kuriosum liegt im Nikolaiviertel: Die <b>Eiergasse</b> gilt mit nur rund <b>16 Metern</b> als kürzeste Straße der Stadt. Sie verbindet den Nikolaikirchplatz mit dem Mühlendamm und dient heute vor allem als schmale Passage mit Gastronomie-Außenflächen. Auch andere Namen im Register wirken wie kleine Verwaltungsfundstücke – etwa <b>Weg A</b> bis <b>Weg G</b> oder der mittelalterliche <b>Kolk</b> in Spandau. Doch die Eiergasse zeigt am deutlichsten, wie selbst winzige Straßen zu Teilchen der Berliner Stadtgeschichte werden.",
      location: {
        center: [13.201, 52.539],
        zoom: 17,
        pitch: 20,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "eiergasse",
          opacity: 1,
          duration: 5000,
        },
        {
          layer: "satellite-imagery",
          opacity: 1,
          duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: "eiergasse",
          opacity: 0,
          duration: 5000,
        },
        {
          layer: "satellite-imagery",
          opacity: 0,
          duration: 5000,
        },
      ],
    },
    {
      id: "sonnenallee",
      alignment: "right",
      hidden: false,
      title: "Sonnenallee",
      // image: './assets/sonnenallee.jpg',
      description:
        "Die <b>Sonnenallee</b> gehört zu den berühmtesten Straßen Berlins – nicht nur wegen des gleichnamigen Films über jenen kurzen Abschnitt, der in der DDR lag. Das Partyvolk fand und findet hier angesagte Locations, die vielen kleinen Lebensmittelgeschäfte erfüllen auch außergewöhnliche Wünsche. Vom Hermannplatz bis zum Baumschulenweg sind es knapp fünf Kilometer – angefangen hat alles ganz klein: 1880 auf dem sumpfigen Gebiet des damals eigenständigen Rixdorfs mit dem schlichten Namen Straße 84.",
      location: {
        center: [13.447, 52.476],
        zoom: 13,
        pitch: 20,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "sonnenallee",
          opacity: 1,
          duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: "sonnenallee",
          opacity: 0,
          duration: 5000,
        },
      ],
    },
    {
      id: "karl-marx-allee",
      alignment: "left",
      hidden: false,
      title: "Karl-Marx-Allee",
      // image: './assets/karl-marx-allee.jpg',
      description:
        'Die <b>Karl-Marx-Allee</b> ist Berlins ambivalentestes Straßendenkmal. Als „Stalinallee" 1949 angelegt, war sie der sozialistische Schaufensterboulevard der DDR – breit genug für Panzer, flankiert von monumentalen Wohnpalästen im Zuckerbäckerstil. 1961 umbenannt, als Stalins Kult auch im Osten bröckelte. Heute steht sie unter Denkmalschutz: nicht wegen des Namens, sondern wegen der Architektur. Am 17. Juni 1953 marschierten hier streikende Bauarbeiter – die Straße, die den Sozialismus verkörpern sollte, war Ausgangspunkt des Volksaufstands.',
      location: {
        center: [13.438, 52.517],
        zoom: 13,
        pitch: 20,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "karl-marx-allee",
          opacity: 1,
          duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: "karl-marx-allee",
          opacity: 0,
          duration: 5000,
        },
      ],
      id: "landsberger-allee",
      alignment: "right",
      hidden: false,
      title: "Landsberger Allee",
      description:
        "Die <b>Landsberger Allee</b> verweist auf das frühere <b>Landsberg an der Warthe</b>, heute <b>Gorzów Wielkopolski</b> in Polen. Straßennamen konservieren Geographien, die politisch verschwunden sind, auf Berliner Schildern aber weiterleben.",
      location: {
        center: [13.468, 52.527],
        zoom: 12,
        pitch: 20,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "landsberger-allee",
          opacity: 1,
          duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: "landsberger-allee",
          opacity: 0,
          duration: 5000,
        },
      ],
    },
    {
      id: "kietz",
      alignment: "right",
      hidden: false,
      title: "Kietz",
      description:
        "Berlin ist ein Millionendorf – und trägt die Dörfer noch in sich. Historisch hieß es <b>Kietz</b>: So wurden slawische Siedlungen am Rand mittelalterlicher Städte bezeichnet, die schon vor der brandenburgischen Expansion bestanden. Im Berliner Alltagsdeutsch wurde daraus später <b>Kiez</b> – nicht mehr als eigener Siedlungstyp, sondern als Wort für das vertraute Wohnviertel. Im Berliner Straßenregister taucht <b>Kietz/Kiez</b> heute noch in <b>10</b> Straßennamen auf, vom schlichten <b>Kietz</b> bis zum neueren <b>Möckernkiez</b>.",
      location: {
        center: [13.578, 52.443],
        zoom: 15,
        pitch: 20,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "satellite-imagery",
          opacity: 1,
          duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: "satellite-imagery",
          opacity: 0,
          duration: 5000,
        },
      ],
    },
    {
      id: "geister-strassen",
      alignment: "center",
      hidden: false,
      title: '"Geisterhafte" Straßennamen',
      description:
        "Auch Berlin kennt Straßen, die auf keinem Briefumschlag landen. Manchmal sind es Wege, die nur der Infrastruktur dienen – Zufahrten, Brücken, Tunnel. Manchmal sind es Relikte der Teilung: Straßen, die in West- und Ostberlin doppelt existierten und nach der Wende zwischen den Verwaltungen verschwanden. Irgendwie schade, dass sie nie das Privileg haben, auf einem Briefumschlag zu stehen.",
      location: {
        center: [13.405, 52.52],
        zoom: 10.5,
        pitch: 20,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "geschichte",
      alignment: "center",
      hidden: false,
      description:
        "Ein (virtueller) Spaziergang durch Berlin mit einem Blick auf die Straßenschilder ist wie das Lesen eines Palimpsests: Immer wieder wurde überschrieben, aber die älteren Schichten scheinen durch. Preußen, Kaiserreich, Weimarer Republik, NS-Diktatur, Kalter Krieg, Wiedervereinigung – jede Epoche hat ihre Spuren hinterlassen. Und nicht immer wurden sie getilgt. <br>Und wir sind Teil dieser Geschichte und prägen die Identität weiter:",
      location: {
        center: [13.405, 52.52],
        zoom: 10.5,
        pitch: 20,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "anton-wilhelm-amo-strasse",
      alignment: "right",
      hidden: false,
      title: "Anton-Wilhelm-Amo-Straße",
      // image: './assets/anton-wilhelm-amo.jpg',
      description:
        "Straßennamen als Erinnerungskampf: Für Berlin passt besonders gut die Schicht aus NS-, DDR- und kolonialen Umbenennungen. Offiziell wird in Mitte ausdrücklich auf problematische NS- und DDR-Bezüge verwiesen; im <b>Afrikanischen Viertel</b> nennt der Bezirk konkrete Umbenennungen wie Nachtigalplatz, Lüderitzstraße, Petersallee und Mohrenstraße. Für letztere entschied das OVG am 9. Juli 2025, dass die Umbenennung in <b>Anton-Wilhelm-Amo-Straße</b> rechtmäßig ist. Anton Wilhelm Amo war ein Philosoph aus dem heutigen Ghana, der im 18. Jahrhundert in Deutschland lehrte – einer der ersten Schwarzen Akademiker Europas.",
      location: {
        center: [13.386, 52.511],
        zoom: 15.5,
        pitch: 20,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "anton-wilhelm-amo-strasse",
          opacity: 1,
          duration: 5000,
        },
        {
          layer: "afrikanisches-viertel",
          opacity: 1,
          duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: "anton-wilhelm-amo-strasse",
          opacity: 0,
          duration: 5000,
        },
        {
          layer: "afrikanisches-viertel",
          opacity: 0,
          duration: 5000,
        },
      ],
    },
    {
      id: "frauen",
      alignment: "center",
      hidden: false,
      title: "",
      description:
        "Ein aktuelles Thema ist auch die deutliche Unterrepräsentation von Frauen bei Straßennamen. Von den rund 14.000 Straßennamen Berlins tragen weniger als zehn Prozent weibliche Vornamen. Neuere Benennungen versuchen, dieses Ungleichgewicht langsam zu korrigieren – auch in Berlin gibt es entsprechende Initiativen und Vorgaben für Neubenennungen.",
      location: {
        center: [13.405, 52.52],
        zoom: 10.5,
        pitch: 20,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "ende",
      alignment: "center",
      hidden: false,
      title: "",
      description:
        "Straßennamen spiegeln nicht nur die große Geschichte wider. Wir alle haben einen persönlichen Bezug zu ihnen: Sicherlich erinnerst du dich noch an die Straße, in der du aufgewachsen bist? Diese abstrakten Daten sind für Menschen, die hier leben, sehr persönlich. Und so werden sie immer wieder zum Gegenstand von Debatten – weil Straßennamen nicht nur zeigen, wer war, sondern entscheiden, wen wir erinnern wollen.",
      location: {
        center: [13.405, 52.52],
        zoom: 10.5,
        pitch: 20,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
