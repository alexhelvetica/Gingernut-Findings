## History Lesson 
Have you ever had a craving arnotts ginger nuts when you're not at home, bought a pack and it just tasted wrong?

You are not alone. Arnott's has 4 different varieties. A long time ago, Arnott's didn't have a biscuit monopoly. They did the capitalist thing in the 50's and 60's and swollowed up the competition; Morrows, Brockhoff, Guest's, Motteram, Menz, Mills & Ware to name a few.

Arnotts - NSW

Morrows Pty Ltd - QLD
https://trove.nla.gov.au/newspaper/article/285532926


Brockhoff Biscuits - NSW (1963) (Probably Victorian Variety)
https://www.flickr.com/photos/bycroftboy/17167069876

Guest's - VIC
https://australianfoodtimeline.com.au/guests-biscuits/
https://static.wixstatic.com/media/5a8699_380d37c83a8540f8a20b7c010c668492~mv2.jpg/v1/fill/w_510,h_684,al_c,lg_1,q_80,enc_auto/5a8699_380d37c83a8540f8a20b7c010c668492~mv2.jpg

Motteram biscuits - SA (1950)
I don't think they had gingernut, but idk
Menz - SA (1964)

Mills and Ware - WA (1953-1973)
 (They have a gingernut)
 https://www.legislation.wa.gov.au/legislation/prod/gazettestore.nsf/FileURL/gg1949_073.pdf/$FILE/Gg1949_073.pdf?OpenElement


I don't know which variety is based on which original bakery, but there's at least 4 varieties, and possibly 7 that were reduced to 4 varieties.


## How this relates to me
After a long car trip with friends, we arrived back at theirs and the only thing in their pantry was a packet of gingernuts, but it didn't quite feel right. And that resulted in going down a bit of a rabbit hole, because of cause it did.

I had questions, like where can I buy each variety of ginger nut, and if there's areas that sold the "wrong" gingernut, or areas that sold both. I quickly had a look at Coles's and Woolworths' website to have a look about how their Online APIs worked, and I decided that Coles's was the easier of the 2 to work with.

I also decided this would be an excellent project for me to learn python with, as it's a scripting kinda project and it's fairly diverse at the stuff I needed to do.

## Stock
So at this point, I ended up with an API to retrieve the product information for a product for each store, and I found each 4 of the skus.


I initally tried to call each store and SKU sequentually, but quickly did the maths and realised it'd it'd take 30 minutes to complete all 40,000 api requests (Each request took about 45ms). so it's abundanly clear I needed call multiple requests concurrently, so I used concurrent.


So I queried this api 10,000 times (store 0 to store 9999), for each 4 SKU, and categorised it as "In Stock", "Out Of Stock", "Not Stocked" and "Not Found".
    - Not Found, the API returns notFound. This means the store Id is invalid.
    - In Stock means it had an availabilty attribute,
    - Out Of Stock doesn't have that attribute
    - Not Stocked: Means there's not a pricing attribute in the response

## Stores
So I now have a the inventory for about 900 stores, but I have no idea where these stores are in Australia. So time to find a dataset.

I found the find a store near me api, and tested it to see if it'd work, unfortunately it had a maximum distance it'd look in, and it had a maximum number of stores it'd return, so it ended up being infesible to use.

So more digging. After a look of googling, I found some old internal-looking ASPX webpage that allowed me to download a xlsx of coles locations.
https://sites.coles.com.au/Sites/StoreSearch.aspx
but the data in the spreadsheet seemed to be outdated and wrong. It had Pick n Pays and former Bi-LO locations that seemed to be now be IGA, so not coles group.

It also was also missing a large amount of stores I had stock information for, so I realised it's too outdated to rely upon, and did more digging

I then found another a location api 4 apis
storeUrl1 = "https://apigw.coles.com.au/digital/colesweb/v1/stores/"

I believe it was depreciated, as Coles had changed their location information page and had a redirect on most of their stores to the new page. Unfortunately, a search engine had it indexed for the 1 store they didn't have a redirect on, so I discovered this api.

I ended up exhausting it for resources. It's returning an out of memory error or something similar. It wasn't me who was getting rate limited xD

I was still missing stores that I thought should have existed, so did even more digging and found another 3
storeUrl2 = f"https://www.coles.com.au/_next/data/{apiVersion}/en/find-stores/coles/a/"
storeUrl3 = "https://www.coles.com.au/api/bff/locations/"
storeUrl4 = "https://www.coles.com.au/api/bff/trolley/store/"

I believe I found a few more stores with the 2nd api, but they're mostly only stores I'd had in the spreadsheet, and found nothing new with the 4th api. 

The 4th api ended up being a dud. It had a store parameter, but it'd only return data for the store in my session on their server. I played around with it for a bit then realised there wasn't much I could do about it.

So, now I have the data, how do I display it?

I found geopands allows me to create a static plot with matplotlib. I played around with a bit, before realising I couldn't make it interactive. So back to the drawing board.

So after more looking at more tutorials, I found out that GeoPandas also supports an explorable leaflet map, which utalises the folium package, so ended up redoing the plot to use GeoPandas instead.

I then exported each plot (I also created one for the savoy/jatz stores), and built up a simple webpage.

I'm happy with the outcome.