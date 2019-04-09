# React Playground
Kodbasen innehåller grundläggande inställningar för att köra React Typescript och Webpack tillsamans.
Den ämnas att användas som grund för undervisningsmaterialet i den uppkommande ramverkskursen hos Media Institutet.

## Användning

Kör först ```npm install``` sedan ```npm run app``` för att starta.

Jag har inte tänkt ut helt hur vi vill använda kodbasen. Tänker att vi kan ha den som stöd men tror även att
det skulle vara bra för elevern att sätta upp något från början - något som bör vara en viktig del i kursen.
Dels för att eleverna skall få en bra förståelse för hur React, Typescript och Webpack fungerar tillsammans.
Samt lite grundläggande förståelse över vilka inställningsmöjligheter som finns.

*Därför har jag satt upp det här väldigt simpla projektet som sätter det mest grundläggande på plats!*

Tänker att bästa sättet att gå vidare nu är att skapa upp lite cases i olika branches gällande:
`Funktionskomponenter`, `klasskomponenter`, `Props`, `State`, `Callbacks`, `Livscykelmetoderna`, `Context`, `Hooks`, `Code Splitting`, `Concurrency`, mm.

Eventuellt behöver vi först gå igenom lite mer grunläggande **Typescript** koncept som:
`Typer`, `Interfaces`, `Klasser`, `Funktioner`, `Generics`, mm.
Men det kanske vi kan hålla utanför den här kodbasen?

## UI Ramverk
Just nu har jag inte dragit in något ramverk för UI/CSS utan bara gjort inline-styling, fast utbrytet i variabler (för att hålla koden snygg).

Om vi kommer ha tid till det så skulle det ju kunna vara en bra ide att köra på tex React-Semantic.
Här är några av de [mest populära ramverken](https://medium.com/@zeolearn/6-best-reactjs-based-ui-frameworks-37ea7cbd53b4).

## Beyond React 16
Det har hänt mycket med React det senaste och jag tycker att vi borde se till att hålla oss uppdaterade inför kursen.
Några utav sakerna som jag nämde ovan *(Hooks, Code Splitting, Concurrency)* är relativt nya koncept som vi borde introducera under kursen.
Även livscykelmetorna *componentWillMount*, *componentWillReceiveProps*, *componentWillUpdate* är ju deprikerade,
så vi borde ta upp dessa under kursen så eleverna inte blir förvirrande när dom googlar,
men samtidigt gå egenom dom nya ersättningsmetoderna **getDerivedStateFromProps** och **getSnapshotBeforeUpdate**.

## Frammåt
Vi kan väl diskutera hur vi vill göra med detta repot och hålla det uppdaterat!
# React-Playground-2
