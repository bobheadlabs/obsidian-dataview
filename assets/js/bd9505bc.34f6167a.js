(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[509],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3089:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i={sidebar_position:1},o={unversionedId:"query/queries",id:"query/queries",isDocsHomePage:!1,title:"Queries",description:"The dataview query language is a simple, structured, custom query language for quickly creating views on your data. It",source:"@site/docs/query/queries.md",sourceDirName:"query",slug:"/query/queries",permalink:"/obsidian-dataview/docs/query/queries",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Creating Queries",permalink:"/obsidian-dataview/docs/creating-queries"},next:{title:"Expressions",permalink:"/obsidian-dataview/docs/query/expressions"}},s=[{value:"General Format",id:"general-format",children:[]},{value:"Query Types",id:"query-types",children:[{value:"List Queries",id:"list-queries",children:[]},{value:"Table Queries",id:"table-queries",children:[]},{value:"Task Queries",id:"task-queries",children:[]}]},{value:"Data Commands",id:"data-commands",children:[{value:"FROM",id:"from",children:[]},{value:"WHERE",id:"where",children:[]},{value:"SORT",id:"sort",children:[]},{value:"GROUP BY",id:"group-by",children:[]},{value:"FLATTEN",id:"flatten",children:[]}]}],p={toc:s};function u(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The dataview query language is a simple, structured, custom query language for quickly creating views on your data. It\nsupports:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fetching pages associated with tags, folders, links, and so on."),(0,l.kt)("li",{parentName:"ul"},"Filtering pages / data by simple operations on fields, like comparison, existence checks, and so on."),(0,l.kt)("li",{parentName:"ul"},"Sorting results based on fields.")),(0,l.kt)("p",null,"The query language supports the following view types, described below:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"TABLE"),": The traditional view type; one row per data point, with several columns of field data."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"LIST"),": A list of pages which match the query. You can output a single associated value for each page."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"TASK"),": A list of tasks whose pages match the given query.")),(0,l.kt)("h2",{id:"general-format"},"General Format"),(0,l.kt)("p",null,"The general format for queries is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"```dataview\nTABLE|LIST|TASK <field> [AS \"Column Name\"], <field>, ..., <field> FROM <source> (like #tag or \"folder\")\nWHERE <expression> (like 'field = value')\nSORT <expression> [ASC/DESC] (like 'field ASC')\n... other data commands\n```\n")),(0,l.kt)("p",null,"Only the 'select' statement (describing what view and what fields) is required. If the ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM")," statement is omitted, the\nquery runs automatically over all markdown pages in your vault. If other statements (like ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"SORT"),") are\npresent, they are run in the order they are written. Duplicate statements are allowed (multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," statement, for eaxmple)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For the different view types, only the first line (the 'select' section, where you specify the view type and fields to\ndisplay) differs. You can apply ",(0,l.kt)("em",{parentName:"li"},"data commands")," like ",(0,l.kt)("em",{parentName:"li"},"WHERE")," and ",(0,l.kt)("em",{parentName:"li"},"SORT")," to any query, and you can select from any\n",(0,l.kt)("a",{parentName:"li",href:"/docs/query/sources"},"source")," using ",(0,l.kt)("em",{parentName:"li"},"FROM"),".")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"expressions"},"expressions")," for context on what expressions are, and ",(0,l.kt)("a",{parentName:"p",href:"sources"},"sources")," for context on what sources are."),(0,l.kt)("h2",{id:"query-types"},"Query Types"),(0,l.kt)("h3",{id:"list-queries"},"List Queries"),(0,l.kt)("p",null,"Lists are the simplest view, and simply render a list of pages (or custom fields) which match the query.\nTo obtain a list of pages matching the query, simply use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"LIST FROM <source>\n")),(0,l.kt)("p",null,"For example, running ",(0,l.kt)("inlineCode",{parentName:"p"},"LIST FROM #games/moba or #games/crpg")," might show:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"List Example",src:n(357).Z})),(0,l.kt)("p",null,"You can render a single computed value in addition to each matching file, by adding an expression after ",(0,l.kt)("inlineCode",{parentName:"p"},"LIST"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"LIST <expression> FROM <source>\n")),(0,l.kt)("p",null,"For example, running ",(0,l.kt)("inlineCode",{parentName:"p"},'LIST "File Path: " + file.path FROM "4. Archive"')," might show:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"List Example",src:n(9113).Z})),(0,l.kt)("h3",{id:"table-queries"},"Table Queries"),(0,l.kt)("p",null,"Tables support tabular views of page data. You construct a table by giving a comma separated list of the YAML frontmatter fields you want to render, as so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"TABLE file.day, file.mtime FROM <source>\n")),(0,l.kt)("p",null,"You can choose a heading name to render computed fields by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"AS")," syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"TABLE (file.mtime + dur(1 day)) AS next_mtime, ... FROM <source>\n")),(0,l.kt)("p",null,"An example table query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'TABLE time-played AS "Time Played", length as "Length", rating as "Rating" FROM #game\nSORT rating DESC\n')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Table Example",src:n(4462).Z})),(0,l.kt)("h3",{id:"task-queries"},"Task Queries"),(0,l.kt)("p",null,"Task views render all tasks whose pages match the given predicate."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"TASK from <source>\n")),(0,l.kt)("p",null,"For example, ",(0,l.kt)("inlineCode",{parentName:"p"},'TASK FROM "dataview"')," might show:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Task Example",src:n(9730).Z})),(0,l.kt)("h2",{id:"data-commands"},"Data Commands"),(0,l.kt)("p",null,"The different commands that dataview queries can be made up of. Commands are\nexecuted in order, and you can have duplicate commands (so multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE"),"\nblocks or multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY")," blocks, for example)."),(0,l.kt)("h3",{id:"from"},"FROM"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM")," statement determines what pages will initially be collected and passed onto the other commands for further\nfiltering. You can select from any ",(0,l.kt)("a",{parentName:"p",href:"/docs/query/sources"},"source"),", which currently means by folder, by tag, or by incoming/outgoing links."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Tags"),": To select from a tag (and all its subtags), use ",(0,l.kt)("inlineCode",{parentName:"li"},"FROM #tag"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Folders"),": To select from a folder (and all its subfolders), use ",(0,l.kt)("inlineCode",{parentName:"li"},'FROM "folder"'),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Links"),": You can either select links TO a file, or all links FROM a file.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"To obtain all pages which link TO ",(0,l.kt)("inlineCode",{parentName:"li"},"[[note]]"),", use ",(0,l.kt)("inlineCode",{parentName:"li"},"FROM [[note]]"),"."),(0,l.kt)("li",{parentName:"ul"},"To obtain all pages which link FROM ",(0,l.kt)("inlineCode",{parentName:"li"},"[[note]]")," (i.e., all the links in that file), use ",(0,l.kt)("inlineCode",{parentName:"li"},"FROM outgoing([[note]])"),".")))),(0,l.kt)("p",null,"You can compose these filters in order to get more advanced sources using ",(0,l.kt)("inlineCode",{parentName:"p"},"and")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"or"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For example, ",(0,l.kt)("inlineCode",{parentName:"li"},'#tag and "folder"')," will return all pages in ",(0,l.kt)("inlineCode",{parentName:"li"},"folder")," and with ",(0,l.kt)("inlineCode",{parentName:"li"},"#tag"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[[Food]] or [[Exercise]]")," will give any pages which link to ",(0,l.kt)("inlineCode",{parentName:"li"},"[[Food]]")," OR ",(0,l.kt)("inlineCode",{parentName:"li"},"[[Exercise]]"),".")),(0,l.kt)("h3",{id:"where"},"WHERE"),(0,l.kt)("p",null,"Filter pages on fields. Only pages where the clause evaluates to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," will be yielded."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"WHERE <clause>\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Obtain all files which were modified in the last 24 hours:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"LIST WHERE file.mtime >= date(today) - dur(1 day)\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Find all projects which are not marked complete and are more than a month old:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"LIST FROM #projects\nWHERE !completed AND file.ctime <= date(today) - dur(1 month)\n")),(0,l.kt)("h3",{id:"sort"},"SORT"),(0,l.kt)("p",null,"Sorts all results by one or more fields."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SORT date [ASCENDING/DESCENDING/ASC/DESC]\n")),(0,l.kt)("p",null,"You can also give multiple fields to sort by. Sorting will be done based on the first field. Then, if a tie occurs, the second field will be used to sort the tied fields. If there is still a tie, the third sort will resolve it, and so on."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SORT field1 [ASCENDING/DESCENDING/ASC/DESC], ..., fieldN [ASC/DESC]\n")),(0,l.kt)("h3",{id:"group-by"},"GROUP BY"),(0,l.kt)("p",null,"Group all results on a field. Yields one row per unique field value, which has 2 properties: one corresponding to the field being grouped on, and a ",(0,l.kt)("inlineCode",{parentName:"p"},"rows")," array field which contains all of the pages that matched."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GROUP BY field\nGROUP BY (computed_field) AS name\n")),(0,l.kt)("p",null,"In order to make working with the ",(0,l.kt)("inlineCode",{parentName:"p"},"rows"),' array easier, Dataview supports field "swizzling". If you want the field ',(0,l.kt)("inlineCode",{parentName:"p"},"test")," from every object in the ",(0,l.kt)("inlineCode",{parentName:"p"},"rows")," array, then ",(0,l.kt)("inlineCode",{parentName:"p"},"rows.test")," will automatically fetch the ",(0,l.kt)("inlineCode",{parentName:"p"},"test")," field from every object in ",(0,l.kt)("inlineCode",{parentName:"p"},"rows"),", yielding a new array.\nYou can then apply aggregation operators like ",(0,l.kt)("inlineCode",{parentName:"p"},"sum()")," over the resulting array."),(0,l.kt)("h3",{id:"flatten"},"FLATTEN"),(0,l.kt)("p",null,"Flatten an array in every row, yielding one result row per entry in the array."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"FLATTEN field\nFLATTEN (computed_field) AS name\n")),(0,l.kt)("p",null,"For example, flatten the ",(0,l.kt)("inlineCode",{parentName:"p"},"authors")," field in each literature note to give one row per author:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"table authors from #LiteratureNote\nflatten authors\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Flatten Example",src:n(2452).Z})))}u.isMDXComponent=!0},9113:function(e,t,n){"use strict";t.Z=n.p+"assets/images/file-path-list-e10d7b78c544b424ae316520bdcde1e8.png"},2452:function(e,t,n){"use strict";t.Z=n.p+"assets/images/flatten-authors-ae602de33e28e0a4d66977d134774e54.png"},357:function(e,t){"use strict";t.Z="data:image/png;base64,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"},4462:function(e,t,n){"use strict";t.Z=n.p+"assets/images/game-0417d5136353f57fcdb8903b1dcc9a2b.png"},9730:function(e,t,n){"use strict";t.Z=n.p+"assets/images/project-task-3a548a1a3f88cd4e4d97f9582433f86d.png"}}]);