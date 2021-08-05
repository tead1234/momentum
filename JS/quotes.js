const quotes =[ 
    {
        quote: "수익을 당연히 여기는 생각은 큰폭의 하락을 경험하면 치유된다",
        author: "피터린치"
    },
    {
        quote: "삼성전자나 사라 등신아",
        author: "나"
    },
    {
        quote: "sens fda 승인은 언제 날까",
        author: "나"
    },
    {
        quote: "시장에 거스르지 마라",
        author: "나"
    },
    {
        quote: "얌전히 SnP 추종이나 사거라",
        author: "워렌버핏"
    }
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.round(Math.random()*(quotes.length-1))];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;