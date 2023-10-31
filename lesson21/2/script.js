let spanS1= $("#s1").text();
let bS2 = $("b.s2").text();
let iSecond = $("#second > i").text();
let qTitle = $("q[title='hello']").text();
let aBlank =   $("a[target='_blank']").text();
let spanExtra = $('span.extra:eq(1)').text();

alert(spanS1 + bS2 + iSecond + qTitle + aBlank + spanExtra);