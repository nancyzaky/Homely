# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

product_1 = Product.create(price:2099, description:"The Timber will inspire you to explore — even if your journey only goes as far as the pantry. With its oak wood trim, feathery cushions, and full-aniline dye process, the Timber is sinkable and plush but cleans up real nice. Natural color variations, wrinkles, and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.", material:"Leather", cat:"sofa", name:"Timber Charme Tan Sofa")

pictures_p1 = Picture.create([{url:"https://cdn-images.article.com/products/SKU2128/2890x1500/image58175.jpg", product_id:1},  {url:"https://cdn-images.article.com/products/SKU2128/2890x1500/image58176.jpg",product_id:1},{url:"https://cdn-images.article.com/products/SKU2128/2890x1500/image58177.jpg",product_id:1}, {url:"https://cdn-images.article.com/products/SKU2128/2890x1500/image58178.jpg",product_id:1}, {url:"https://cdn-images.article.com/products/SKU2128/2890x1500/image58184.jpg",product_id:1}, {url:"https://cdn-images.article.com/products/SKU2128/2890x1500/image66570.jpg", product_id:1},])

features_p1 = Feature.create([{feat:"Sturdy corner blocked wooden frame", product_id:1}, {feat:"High density foam with polyester and down filling", product_id:1}, {feat:"Upholstered in full-aniline Italian-tanned leather",product_id:1}, {feat:"Loose seat and back cushions", product_id:1}, {feat:"Pirelli webbing",product_id:1}, {feat:"Simple assembly required (approximately 5 minutes)", product_id:1}])

specifics_p1 = Specific.create(style:"Mid-century modern", height:32, width:90, depth:35, materials:"
Kiln dried solid wood, high density foam, polyester, duck feathers, full-aniline leather", color:"Charme Tan", product_id:1)

# -------------------------------------------------
product_2 = Product.create(price:169, description:"Little lamb? Close, but not sentient. The Cilo in Ivory Bouclé is a sweet small ottoman that is tougher than it looks. Wooden internal structure gives this piece structure and weight; pads make it comfy to perch on; that nubby texture makes it inarguably cute.", material:"Fabric", cat:"sofa", name:"Cilo Ivory Bouclé Ottoman")

pictures_p2 = Picture.create([{url:"https://cdn-images.article.com/products/SKU13492/2890x1500/image51234.jpg?fit=max&w=2740&q=60&fm=webp", product_id:2}, {url:"https://cdn-images.article.com/products/SKU13492/2890x1500/image51236.jpg?fit=max&w=2740&q=60&fm=webp",product_id:2},{url:"https://cdn-images.article.com/products/SKU13492/2890x1500/image51237.jpg?fit=max&w=2740&q=60&fm=webp",product_id:2}, {url:"https://cdn-images.article.com/products/SKU13492/2890x1500/image51235.jpg?fit=max&w=2740&q=60&fm=webp",product_id:2}, {url:"https://cdn-images.article.com/products/SKU13492/2890x1500/image54528.jpg?fit=max&w=2740&q=60&fm=webp",product_id:2}, {url:"https://cdn-images.article.com/products/SKU13492/2890x1500/image66265.jpg?fit=max&w=2740&q=60&fm=webp", product_id:2}])


specifics_p2 = Specific.create(style:"
Scandinavian", height:17.5, width:17, materials:"
Kiln dried Larch, plywood, foam, polyester, Fabric - 81% Polyester, 19% Acrylic, Martindale test - 50,000 rubs", color:"
Ivory Boucle", product_id:2)

features_p2 = Feature.create([{feat:"Sturdy solid wood frame construction", product_id:2}, {feat:"Rubber webbing suspension.", product_id:2}, {feat:"High density foam with polyester fiber filling.",product_id:2}, {feat:"No assembly required.", product_id:2}, {feat:"Pirelli webbing",product_id:2}])

# -------------------------------------------------
product_3 = Product.create(price:1499, description:"A honey oak wooden trim and voluptuous linen cushions define this sofa with an updated mid-century modern style. Sink into the feather filled cushions and relax — you've come home to your new favorite place.", material:"Fabric", cat:"sofa", name:"Timber Olio Green Sofa")

pictures_p3 = Picture.create([{url:"https://cdn-images.article.com/products/SKU12684/2890x1500/image58197.jpg?fit=max&w=2740&q=60&fm=webp", product_id:3}, {url:"https://cdn-images.article.com/products/SKU12684/2890x1500/image58199.jpg?fit=max&w=2740&q=60&fm=webp",product_id:3},{url:"https://cdn-images.article.com/products/SKU12684/2890x1500/image58200.jpg?fit=max&w=2740&q=60&fm=webp",product_id:3}, {url:"https://cdn-images.article.com/products/SKU12684/2890x1500/image58201.jpg?fit=max&w=2740&q=60&fm=webp",product_id:3}, {url:"https://cdn-images.article.com/products/SKU12684/2890x1500/image58202.jpg?fit=max&w=2740&q=60&fm=webp",product_id:3}, {url:"https://cdn-images.article.com/products/SKU12684/2890x1500/image58198.jpg?fit=max&w=2740&q=60&fm=webp", product_id:3}, ])

specifics_p3 = Specific.create(style:"
Mid-century modern", height:32, width:90, depth:35,materials:"
Kiln dried solid wood frame, rubberwood legs, high density foam, Fabric - 90% Polyester 10% Linen, Martindale rating: 40,000 rubs, duck feathers", color:"
Olio Green", product_id:3)


features_p3 = Feature.create([{feat:"Sturdy corner blocked wooden frame", product_id:3}, {feat:"High density foam with polyester and down filling
", product_id:3}, {feat:"Loose seat and back cushions
",product_id:3}, {feat:"Pirelli webbing", product_id:3}, {feat:"Simple assembly required (approximately 5 minutes)",product_id:3}])

# -------------------------------------------------
product_4 = Product.create(price:749, description:"Give them something to talk about. The Lupra chaise lounge commands the attention of all who are lucky enough to lay eyes upon it. Is it the Vienna Blue velvet? The upscale Scandinavian style? The curved bodice? The Lupra would never make you choose. In front of the fire or in your grand foyer, this chaise is one suave superstar.", material:"Fabric", cat:"sofa", name:"Lupra Vienna Blue Daybed")

pictures_p4 = Picture.create([{url:"https://cdn-images.article.com/products/SKU14223/2890x1500/image53749.jpg?fit=max&w=2740&q=60&fm=webp", product_id:4}, {url:"https://cdn-images.article.com/products/SKU14223/2890x1500/image53751.jpg?fit=max&w=2740&q=60&fm=webp",product_id:4},{url:"https://cdn-images.article.com/products/SKU14223/2890x1500/image53752.jpg?fit=max&w=2740&q=60&fm=webp",product_id:4}, {url:"https://cdn-images.article.com/products/SKU14223/2890x1500/image53753.jpg?fit=max&w=2740&q=60&fm=webp",product_id:4}, {url:"https://cdn-images.article.com/products/SKU14223/2890x1500/image53754.jpg?fit=max&w=2740&q=60&fm=webp",product_id:4}, {url:"https://cdn-images.article.com/products/SKU14223/2890x1500/image59735.jpg?fit=max&w=2740&q=60&fm=webp", product_id:4}, ])

specifics_p4 = Specific.create(style:"
Scandinavian", height:27.5, width:72, depth:35.5,materials:"

Kiln dried Pine wood frame, foam, rubber webbing, Fabric- 100% Polyester, Martindale test - 50,000 rubs", color:"
Olio Green", product_id:4)


features_p4 = Feature.create([{feat:"Polyester velvet upholstery", product_id:4}, {feat:"Fixed seat and back cushions", product_id:4}, {feat:"Seat and back cushions are filled with foam",product_id:4}, {feat:"Some assembly required (approximately 15 minutes)", product_id:4}])

# -------------------------------------------------
product_5 = Product.create(price:1999, description:"Like your cool uncle who cuts all of the sleeves off his t-shirts, but with clean Industrial design, a modern edge, the comfiest of cushions, and the fact that it’s an armless loveseat and not a 45 year-old man from Mississauga. Okay, so maybe this comparison is fraught, but you can listen to as much Def Leppard while sitting on it as you like. Cool uncle approved.", material:"Leather", cat:"sofa", name:"Cigar Rawhide Tan Loveseat")

pictures_p5 = Picture.create([{url:"https://cdn-images.article.com/products/SKU14562/2890x1500/image58113.jpg?fit=max&w=2740&q=60&fm=webp", product_id:5}, {url:"https://cdn-images.article.com/products/SKU14562/2890x1500/image58114.jpg?fit=max&w=2740&q=60&fm=webp",product_id:5},{url:"https://cdn-images.article.com/products/SKU14562/2890x1500/image58115.jpg?fit=max&w=2740&q=60&fm=webp",product_id:5}, {url:"https://cdn-images.article.com/products/SKU14562/2890x1500/image58116.jpg?fit=max&w=2740&q=60&fm=webp",product_id:5}, {url:"https://cdn-images.article.com/products/SKU14562/2890x1500/image58117.jpg?fit=max&w=2740&q=60&fm=webp",product_id:5}, {url:"https://cdn-images.article.com/products/SKU14562/2890x1500/image58118.jpg?fit=max&w=2740&q=60&fm=webp", product_id:5}, ])

specifics_p5 = Specific.create(style:"
Scandinavian", height:26, width:56, depth:38,materials:"


Kiln dried solid wood, high density foam, polyester fiber, duck feathers, full aniline leather", color:"
Rawhide Tan", product_id:5)


features_p5 = Feature.create([{feat:"Sturdy corner blocked wooden frame", product_id:5}, {feat:"High density foam with polyester filling", product_id:5}, {feat:"Upholstered in Italian-tanned pull-up leather",product_id:5}, {feat:"Tight seat and back", product_id:5}, {feat:"No assembly required", product_id:5}])



# -------------------------------------------------
product_6 = Product.create(price:549, description:"Sit like a Bond villain whose only real diabolical concern is comfort. The Turoy can swivel dramatically, or just regularly, it really depends on your mood—and the chair's extra-soft textured Ivory bouclé fabric will leave you in a good one whenever you decide to lounge in it.", material:"Fabric", cat:"chair", name:"	Turoy Ivory Bouclé Chair")

pictures_p6 = Picture.create([{url:"https://cdn-images.article.com/products/SKU13941/2890x1500/image54663.jpg?fit=max&w=2740&q=60&fm=webp", product_id:6}, {url:"https://cdn-images.article.com/products/SKU13941/2890x1500/image54665.jpg?fit=max&w=2740&q=60&fm=webp",product_id:6},{url:"https://cdn-images.article.com/products/SKU13941/2890x1500/image54666.jpg?fit=max&w=2740&q=60&fm=webp",product_id:6}, {url:"https://cdn-images.article.com/products/SKU13941/2890x1500/image54667.jpg?fit=max&w=2740&q=60&fm=webp",product_id:6}, {url:"https://cdn-images.article.com/products/SKU13941/2890x1500/image54668.jpg?fit=max&w=2740&q=60&fm=webp",product_id:6}, {url:"https://cdn-images.article.com/products/SKU13941/2890x1500/image59740.jpg?fit=max&w=2740&q=60&fm=webp", product_id:6} ])

specifics_p6 = Specific.create(style:"
Scandinavian", height:31, width:32.5, depth:32,materials:"

Kiln dried pine wood frame. Matte black steel base. Foam and polyester filling. Fabric - 81% Polyester, 19% Acrylic, Martindale test - 50,000 rubs", color:"
vory Boucle", product_id:6)


features_p6 = Feature.create([{feat:"Sturdy, corner blocked solid wood frame", product_id:6}, {feat:"Discreet 360° steel swivel base", product_id:6}, {feat:"Rubber webbing suspension",product_id:6}, {feat:"No assembly required", product_id:6}])

#---------------------------------------
product_7 = Product.create(price:169, description:"Soft and small. The Cilo ottoman is more of an “otto-boy.” Smaller than your typical ottoman, the Cilo has a wooden interior framework that helps the otto-boy keep its strong, sleek shape. Use it as a footrest (otto-boy is padded!) or a place to balance your plate while watching reruns of your favorite 90s sitcom. The gray poly-blend fabric is an unobtrusive addition to your space, and cleans easily.", material:"Fabric", cat:"sofa", name:"Cilo Mist Gray Ottoman")

pictures_p7 = Picture.create([{url:"https://cdn-images.article.com/products/SKU13491/2890x1500/image51229.jpg?fit=max&w=2740&q=60&fm=webp", product_id:7}, {url:"https://cdn-images.article.com/products/SKU13491/2890x1500/image51231.jpg?fit=max&w=2740&q=60&fm=webp",product_id:7},{url:"https://cdn-images.article.com/products/SKU13491/2890x1500/image51232.jpg?fit=max&w=2740&q=60&fm=webp",product_id:7}, {url:"https://cdn-images.article.com/products/SKU13491/2890x1500/image51242.jpg?fit=max&w=2740&q=60&fm=webp",product_id:7}, {url:"https://cdn-images.article.com/products/SKU13491/2890x1500/image54527.jpg?fit=max&w=2740&q=60&fm=webp",product_id:7}, {url:"https://cdn-images.article.com/products/SKU13491/2890x1500/image61943.jpg?fit=max&w=2740&q=60&fm=webp", product_id:7} ])

specifics_p7 = Specific.create(style:"
Scandinavian", height:17.5, width:16, depth:17,materials:"


Kiln dried Larch, plywood, foam, polyester, Fabric - 57% Viscose, 18% Polyester, 15% Cotton, 10% Linen, Martindale test - 50,000 rubs", color:"
Mist Gray", product_id:7)


features_p7 = Feature.create([{feat:"Sturdy solid wood frame construction", product_id:7}, {feat:"Rubber webbing suspension.", product_id:7}, {feat:"High density foam with polyester fiber filling.",product_id:7}, {feat:"No assembly required", product_id:7}])


#---------------------------------------
product_8 = Product.create(price:199, description:"Hold my drink. The Narro side table features a black powder-coated metal body situated on a scene-stealing solid Carrara marble base. Just like your favorite attentive but not annoying waiter, the Narro is there to help when you need a hand without ever getting in the way. Snacks, plants, lamps, oh my. The Narro is a gracious host to all.",  cat:"table", name:"	Narro Black Side Table")

pictures_p8 = Picture.create([{url:"https://cdn-images.article.com/products/SKU13621/2890x1500/image50662.jpg?fit=max&w=2740&q=60&fm=webp", product_id:8}, {url:"https://cdn-images.article.com/products/SKU13621/2890x1500/image50667.jpg?fit=max&w=2740&q=60&fm=webp",product_id:8},{url:"https://cdn-images.article.com/products/SKU13621/2890x1500/image50663.jpg?fit=max&w=2740&q=60&fm=webp",product_id:8}, {url:"https://cdn-images.article.com/products/SKU13621/2890x1500/image50666.jpg?fit=max&w=2740&q=60&fm=webp",product_id:8}, {url:"https://cdn-images.article.com/products/SKU13621/2890x1500/image50664.jpg?fit=max&w=2740&q=60&fm=webp",product_id:8}, {url:"https://cdn-images.article.com/products/SKU13621/2890x1500/image66461.jpg?fit=max&w=2740&q=60&fm=webp", product_id:8} ])

specifics_p8 = Specific.create(style:"
Scandinavian", height:14, width:10, depth:10,materials:"



Carrara marble, steel", color:"
Black", product_id:8)


features_p8 = Feature.create([{feat:"Italian Carrara marble", product_id:8}, {feat:"Marble is a natural stone material and will vary in color tone, vein markings and surface texture.", product_id:8}, {feat:"Powder coated black table top.",product_id:8}, {feat:"Some assembly required (approximately 15 minutes)", product_id:8}])


#---------------------------------------
product_9 = Product.create(price:2599, description:"The ultimate chill zone, but for adults. The Timber pebble gray corner sectional hosts the lounging Olympics with feather-soft cushions and a sturdy corner-blocked wooden frame. The Timber’s soothing combination of gray fabric and oak trim makes this the perfect place to do… nothing at all. Meditate, listen to a podcast, or get cozy with a cuppa before heading into a new week.",material:"Fabric" , cat:"sofa", name:"Timber Pebble Gray Corner Sectional")

pictures_p9 = Picture.create([{url:"https://cdn-images.article.com/products/SKU497A/2890x1500/image70472.jpg?fit=max&w=2740&q=60&fm=webp", product_id:9}, {url:"https://cdn-images.article.com/products/SKU497A/2890x1500/image70339.jpg?fit=max&w=2740&q=60&fm=webp",product_id:9},{url:"https://cdn-images.article.com/products/SKU497A/2890x1500/image70340.jpg?fit=max&w=2740&q=60&fm=webp",product_id:9}, {url:"https://cdn-images.article.com/products/SKU497A/2890x1500/image70341.jpg?fit=max&w=2740&q=60&fm=webp",product_id:9}, {url:"https://cdn-images.article.com/products/SKU497A/2890x1500/image70342.jpg?fit=max&w=2740&q=60&fm=webp",product_id:9}, {url:"https://cdn-images.article.com/products/SKU497A/2890x1500/image65503.jpg?fit=max&w=2740&q=60&fm=webp", product_id:9} ])

specifics_p9 = Specific.create(style:"
Mid-century modern", height:32, width:93, depth:35,materials:"Kiln dried solid wood frame, rubberwood legs, high density foam, Fabric - 90% Polyester 10% Linen, Martindale rating: 40,000 rubs, duck feathers", color:"
Honey Oak", product_id:9)


features_p9 = Feature.create([{feat:"Sturdy corner blocked wooden frame", product_id:9}, {feat:"High density foam with polyester and down filling", product_id:9}, {feat:"Upholstered in a Pebble Gray fabric",product_id:9}, {feat:"Loose seat and back cushions", product_id:9},{feat:"Pirelli webbing", product_id:9}, {feat:"Simple assembly required (approximately 5 minutes)", product_id:9}])



#---------------------------------------
product_10 = Product.create(price:799, description:"Not everyone goes home to a personal foot massage, but here's a good alternative: the Timpani Ottoman says “hey girl, put your feet up.” The tufted leather topper makes it a nice footrest… and a great coffee table. Natural color variations, wrinkles and creases are unique characteristics of aniline leather.", material:"Leather", cat:"sofa", name:"	Timpani Charme Tan Ottoman")

pictures_p10 = Picture.create([{url:"https://cdn-images.article.com/products/SKU376/2890x1500/image58158.jpg?fit=max&w=2740&q=60&fm=webp", product_id:10}, {url:"https://cdn-images.article.com/products/SKU376/2890x1500/image58160.jpg?fit=max&w=2740&q=60&fm=webp",product_id:10},{url:"https://cdn-images.article.com/products/SKU376/2890x1500/image58161.jpg?fit=max&w=2740&q=60&fm=webp",product_id:10}, {url:"https://cdn-images.article.com/products/SKU376/2890x1500/image58162.jpg?fit=max&w=2740&q=60&fm=webp",product_id:10}, {url:"https://cdn-images.article.com/products/SKU376/2890x1500/image58164.jpg?fit=max&w=2740&q=60&fm=webp",product_id:10}, {url:"https://cdn-images.article.com/products/SKU376/2890x1500/image58159.jpg?fit=max&w=2740&q=60&fm=webp", product_id:10} ])

specifics_p10 = Specific.create(style:"
Industrial", height:18, width:42, depth:42,materials:"
High density foam, full-aniline leather", color:"
Charme Tan", product_id:10)


features_p10 = Feature.create([{feat:"High density foam with polyester filling
", product_id:10}, {feat:"Upholstered in full-aniline Italian-tanned leather
", product_id:10}, {feat:"Assembly not required
",product_id:10}])



#---------------------------------------
product_11 = Product.create(price:349, description:"Story time chic. The Meno leather lounger is an updated Japan-like take on the classic lounge shape. Upholstered in a sleek black leather, the Meno lounger sits atop a steel frame. Style it with a Lanna sheepskin throw for a cozy reading nook, or let it speak for itself: stark, serious, but a little mischievous too.", material:"Leather",cat:"chair", name:"Meno Black Leather Lounge Chair")

pictures_p11 = Picture.create([{url:"https://cdn-images.article.com/products/SKU13276/2890x1500/image49102.jpg?fit=max&w=2740&q=60&fm=webp", product_id:11}, {url:"https://cdn-images.article.com/products/SKU13276/2890x1500/image49100.jpg?fit=max&w=2740&q=60&fm=webp",product_id:11},{url:"https://cdn-images.article.com/products/SKU13276/2890x1500/image49103.jpg?fit=max&w=2740&q=60&fm=webp",product_id:11}, {url:"https://cdn-images.article.com/products/SKU13276/2890x1500/image49104.jpg?fit=max&w=2740&q=60&fm=webp",product_id:11}, {url:"https://cdn-images.article.com/products/SKU13276/2890x1500/image49197.jpg",product_id:11}, {url:"https://cdn-images.article.com/products/SKU13276/2890x1500/image54597.jpg?fit=max&w=400&q=40", product_id:11} ])

specifics_p11 = Specific.create(style:"

Mid-century modern", height:28.5, width:24, depth:32,materials:"

Steel frame, Semi-aniline Leather", color:"

Black Leather", product_id:11)


features_p11 = Feature.create([ {feat:"Semi-aniline black leather, with matte black steel frame
", product_id:11}, {feat:"Assembly not required
",product_id:11}])



#---------------------------------------
product_12 = Product.create(price:299, description:"*Whispers* Who are they? The Scindo nesting tables possess that understated cool that says “Yes I’m beautiful. No, I didn’t have to try.” With a Carrara marble top and black powder-coated metal base, the Scindo tables take a basic design concept and elevate it to top shelf status. They can spread out when you need extra spots to display bouquets from your fans, and tuck back together when those flowers have seen better days. Who wore it best? I think you know the answer.", material:"Marble",cat:"table", name:"Scindo Black Nesting Table")

pictures_p12 = Picture.create([{url:"https://cdn-images.article.com/products/SKU13619/2890x1500/image50594.jpg?fit=max&w=2740&q=60&fm=webp", product_id:12}, {url:"https://cdn-images.article.com/products/SKU13619/2890x1500/image50595.jpg?fit=max&w=2740&q=60&fm=webp",product_id:12},{url:"https://cdn-images.article.com/products/SKU13619/2890x1500/image50596.jpg?fit=max&w=2740&q=60&fm=webp",product_id:12}, {url:"https://cdn-images.article.com/products/SKU13619/2890x1500/image50597.jpg?fit=max&w=2740&q=60&fm=webp",product_id:12}, {url:"https://cdn-images.article.com/products/SKU13619/2890x1500/image50601.jpg?fit=max&w=2740&q=60&fm=webp",product_id:12}, {url:"https://cdn-images.article.com/products/SKU13619/2890x1500/image65030.jpg?fit=max&w=2740&q=60&fm=webp", product_id:12} ])

specifics_p12 = Specific.create(style:"

Industrial", height:17, width:17, depth:18,materials:"


Carrera marble, steel", color:"

Black", product_id:12)


features_p12 = Feature.create([
   {feat:"15mm solid white marble", product_id:12},
   {feat:"Italian Carrera marble", product_id:12} ,
   {feat:"Marble is a natural stone material and will vary in color tone, vein markings and surface texture", product_id:12},
   {feat:"Powder coated metal legs", product_id:12},
   {feat:"Assembly not required",product_id:12}])



# product_12 = Product.create(price:299, description:"*Whispers* Who are they? The Scindo nesting tables possess that understated cool that says “Yes I’m beautiful. No, I didn’t have to try.” With a Carrara marble top and black powder-coated metal base, the Scindo tables take a basic design concept and elevate it to top shelf status. They can spread out when you need extra spots to display bouquets from your fans, and tuck back together when those flowers have seen better days. Who wore it best? I think you know the answer.", material:"Marble",cat:"table", name:"Scindo Black Nesting Table")

# pictures_p12 = Picture.create([{url:"https://cdn-images.article.com/products/SKU13619/2890x1500/image50594.jpg?fit=max&w=2740&q=60&fm=webp", product_id:12}, {url:"https://cdn-images.article.com/products/SKU13619/2890x1500/image50595.jpg?fit=max&w=2740&q=60&fm=webp",product_id:12},{url:"https://cdn-images.article.com/products/SKU13619/2890x1500/image50596.jpg?fit=max&w=2740&q=60&fm=webp",product_id:12}, {url:"https://cdn-images.article.com/products/SKU13619/2890x1500/image50597.jpg?fit=max&w=2740&q=60&fm=webp",product_id:12}, {url:"https://cdn-images.article.com/products/SKU13619/2890x1500/image50601.jpg?fit=max&w=2740&q=60&fm=webp",product_id:12}, {url:"https://cdn-images.article.com/products/SKU13619/2890x1500/image65030.jpg?fit=max&w=2740&q=60&fm=webp", product_id:12} ])

# specifics_p12 = Specific.create(style:"

# Industrial", height:17, width:17, depth:18,materials:"


# Carrera marble, steel", color:"

# Black", product_id:12)


# features_p12 = Feature.create([
#   {feat:"15mm solid white marble", product_id:12},
#   {feat:"Italian Carrera marble", product_id:12} ,
#   {feat:"Marble is a natural stone material and will vary in color tone, vein markings and surface texture", product_id:12},
#   {feat:"Powder coated metal legs", product_id:12},
#   {feat:"Assembly not required",product_id:12}])


# /////////////////////////////////////////
product_13 = Product.create(price:1499, description:"The Burrard seasalt gray sofa fits your space like a well-tailored suit. Sharp corners, slip-covered cushions make this light gray sofa easy to pair with tons of different decor styles. The slender arms and mid-century silhouette are both timeless and modern. Honestly what more can a person want in a sofa? How bout solid walnut legs? Okay fine.", material:"Fabric",cat:"sofa", name:"Burrard Seasalt Gray Sofa")

pictures_p13 = Picture.create([{url:"https://cdn-images.article.com/products/SKU431A/2890x1500/image22841.jpg?fit=max&w=2740&q=60&fm=webp", product_id:13}, {url:"https://cdn-images.article.com/products/SKU431A/2890x1500/image46769.jpg?fit=max&w=2740&q=60&fm=webp",product_id:13},{url:"https://cdn-images.article.com/products/SKU431A/2890x1500/image37590.jpg?fit=max&w=2740&q=60&fm=webp",product_id:13}, {url:"https://cdn-images.article.com/products/SKU431A/2890x1500/image16280.jpg?fit=max&w=2740&q=60&fm=webp",product_id:13}, {url:"https://cdn-images.article.com/products/SKU431A/2890x1500/image16447.jpg?fit=max&w=2740&q=60&fm=webp",product_id:13}, {url:"https://cdn-images.article.com/products/SKU431A/2890x1500/image16282.jpg?fit=max&w=2740&q=60&fm=webp", product_id:13} ])

specifics_p13 = Specific.create(style:"Scandinavian", height:33, width:83.5, depth:35,materials:"
Kiln dried pine wood frame. Solid wood legs. High resiliency foam (2.27 PCF) with duck down feathers and fiber. Fabric - 100% Polyester, Martindale test - 100,000 rubs", color:"Seasalt Grey", product_id:13)


features_p13 = Feature.create([
   {feat:"Seat cushions are high resiliency foam with Polyester", product_id:13},
   {feat:"Reversible back cushions are fiber down blend in a down proof cambric shell", product_id:13} ,
   {feat:"Loose cushions with removable covers", product_id:13},
   {feat:"Rubber webbing suspension", product_id:13},
   {feat:"Some assembly required (approximately 5 minutes)",product_id:13}])


#/////////////////////////////////////////////
product_14 = Product.create(price:949, description:"Both stylish and effortless, the Nord Chair is upholstered in full-aniline leather that will take on a patina that gets better and better with age. Set atop beautiful curved wooden legs, it's a great example of a “new classic.", material:"Leather",cat:"chair", name:"Nord Charme Black Chair")

pictures_p14 = Picture.create([{url:"https://cdn-images.article.com/products/SKU502A/2890x1500/image59008.jpg?fit=max&w=2740&q=60&fm=webp", product_id:14}, {url:"https://cdn-images.article.com/products/SKU502A/2890x1500/image59010.jpg?fit=max&w=2740&q=60&fm=webp",product_id:14},{url:"https://cdn-images.article.com/products/SKU502A/2890x1500/image59011.jpg?fit=max&w=2740&q=60&fm=webp",product_id:14}, {url:"https://cdn-images.article.com/products/SKU502A/2890x1500/image59012.jpg?fit=max&w=2740&q=60&fm=webp",product_id:14}, {url:"https://cdn-images.article.com/products/SKU502A/2890x1500/image59013.jpg?fit=max&w=2740&q=60&fm=webp",product_id:14}, {url:"https://cdn-images.article.com/products/SKU502A/2890x1500/image59009.jpg?fit=max&w=2740&q=60&fm=webp", product_id:14} ])

specifics_p14 = Specific.create(style:"

Mid-century modern", height:32, width:29, depth:32,materials:"
Kiln dried wood, high density foam, full-grain aniline leather", color:"

Charme Black", product_id:14)


features_p14 = Feature.create([
  {feat:"Sturdy corner blocked wooden frame
", product_id:14},
  {feat:"Wooden base in a Walnut stain", product_id:14} ,
  {feat:"Upholstered in full-aniline Italian-tanned leather", product_id:14},
  {feat:"Pirelli webbing", product_id:14},
  {feat:"Assembly not required",product_id:14}])
#  /////////////////////////////////////////////////////////
product_15 = Product.create(price:129, description:"Luxuriously dense and silky, Lanna can be used as a plush floor rug, a cozy throw on a bed or seat, or a sumptuous accent draped over furniture. These furs are ethically sourced, natural products, so slight variations in color, size and pile are to be expected. The fur is luxurious and soft with a minimum pile length of 1.5", material:"Sheepskin",cat:"decor", name:"Lanna Ivory Sheepskin Throw 2 x 3")

pictures_p15 = Picture.create([{url:"https://cdn-images.article.com/products/SKU525/2890x1500/image19443.jpg?fit=max&w=2740&q=60&fm=webp", product_id:15}, {url:"https://cdn-images.article.com/products/SKU525/2890x1500/image19431.jpg?fit=max&w=2740&q=60&fm=webp",product_id:15},{url:"https://cdn-images.article.com/products/SKU525/2890x1500/image19432.jpg?fit=max&w=2740&q=60&fm=webp",product_id:15}, {url:"https://cdn-images.article.com/products/SKU525/2890x1500/image19435.jpg?fit=max&w=2740&q=60&fm=webp",product_id:15}, {url:"https://cdn-images.article.com/products/SKU525/2890x1500/image19437.jpg?fit=max&w=2740&q=60&fm=webp",product_id:15}, {url:"https://cdn-images.article.com/products/SKU525/2890x1500/image66260.jpg?fit=max&w=2740&q=60&fm=webp", product_id:15} ])

specifics_p15 = Specific.create(style:"

Mid-century modern", height:2, width:3, depth:nil ,materials:"
Australian / New Zealand Sheepskin", color:"
Ivory", product_id:15)


features_p15 = Feature.create([
  {feat:"100% New Zealand and Australian sheepskins", product_id:15},
  {feat:"Ethically sourced and non toxic", product_id:15} ,
  {feat:"Woolmark certified", product_id:15},
 ])

 #//////////////////////////////////


 product_16 = Product.create(price:299, description:"We love a grand gesture. The graceful arch of the crescent floor lamp makes an impact while keeping your space light – literally and figuratively. With an adjustable shade and sturdy marble base, the crescent lamp casts you in a good light.", material:"Steel,",cat:"decor", name:"	Crescent Black Floor Lamp")

pictures_p16 = Picture.create([{url:"https://cdn-images.article.com/products/SKU3568/2890x1500/image30053.jpg?fit=max&w=2740&q=60&fm=webp", product_id:16}, {url:"https://cdn-images.article.com/products/SKU3568/2890x1500/image30054.jpg",product_id:16},{url:"https://cdn-images.article.com/products/SKU3568/2890x1500/image30052.jpg",product_id:16}, {url:"https://cdn-images.article.com/products/SKU3568/2890x1500/image30055.jpg",product_id:16}, {url:"https://cdn-images.article.com/products/SKU3568/2890x1500/image30056.jpg",product_id:16}, {url:"https://cdn-images.article.com/products/SKU3568/2890x1500/image50729.jpg", product_id:16} ])

specifics_p16 = Specific.create(style:"Scandinavian", height:83, width:15, depth:64,materials:"Steel, marble, plastic", color:"Black", product_id:16)


features_p16 = Feature.create([
  {feat:"Sturdy marble base", product_id:16},
  {feat:"Black and white cord with floor switch", product_id:16} ,
  {feat:"Rated for a standard 40W maximum incandescent bulb, included", product_id:16}, {feat:"Compatible with a wide range of LEDs", product_id:16},
  {feat:"Simple assembly required (approximately 5 minutes)", product_id:16}
 ])





#  ///////////////////////////////////
product_17 = Product.create(price:599, description:"Like your favorite sweater, made better. Hand-woven wool is tightly looped into a sophisticated, soft rug for your floors. This is a perfect option for wood or stone floors and organic-chic, all-natural spaces.", material:"Wool",cat:"decor", name:"Texa Vanilla Ivory Rug 8 x 10")

pictures_p17 = Picture.create([{url:"https://cdn-images.article.com/products/SKU496B/2890x1500/image18451.jpg?fit=max&w=2740&q=60&fm=webp", product_id:17}, {url:"https://cdn-images.article.com/products/SKU496B/2890x1500/image18407.jpg?fit=max&w=2740&q=60&fm=webp",product_id:17},{url:"https://cdn-images.article.com/products/SKU496B/2890x1500/image18408.jpg?fit=max&w=2740&q=60&fm=webp",product_id:17}, {url:"https://cdn-images.article.com/products/SKU496B/2890x1500/image18410.jpg?fit=max&w=2740&q=60&fm=webp",product_id:17}, {url:"https://cdn-images.article.com/products/SKU496B/2890x1500/image75417.jpg?fit=max&w=2740&q=60&fm=webp",product_id:17}, {url:"https://cdn-images.article.com/products/SKU496B/2890x1500/image54062.jpg?fit=max&w=2740&q=60&fm=webp", product_id:17} ])

specifics_p17 = Specific.create(style:"

Contemporary Rug", height:8, width:10, depth:nil ,materials:"
70% Wool 30% Rayon", color:"
Vanilla Ivory", product_id:17)


features_p17 = Feature.create([
  {feat:"Handwoven rug", product_id:17},
  {feat:"Handmade rugs may vary slightly in size and colour", product_id:17} ,
  {feat:"New handcrafted rugs will typically shed loose fibers. This is normal and will diminish with regular vacuuming, usually in 3 to 6 months", product_id:17}, {feat: "Rug pad recommended", product_id:17}
 ])

 #//////////////////////////////////
product_18 = Product.create(price:1299, description:"There’s a reason this is our most popular sofa. This modern take on a mid-century classic features crisp lines, a tufted benchseat, and two luxuriously stuffed back cushions. Two matching round bolsters complete the look.", material:"Fabric",cat:"sofa", name:"Sven Neptune Blue Sofa")

pictures_p18 = Picture.create([{url:"https://cdn-images.article.com/products/SKU15197/2890x1500/image64200.jpg?fit=max&w=2740&q=60&fm=webp", product_id:18}, {url:"https://cdn-images.article.com/products/SKU15197/2890x1500/image64201.jpg?fit=max&w=2740&q=60&fm=webp",product_id:18},{url:"https://cdn-images.article.com/products/SKU15197/2890x1500/image64207.jpg?fit=max&w=2740&q=60&fm=webp",product_id:18}, {url:"https://cdn-images.article.com/products/SKU15197/2890x1500/image64208.jpg?fit=max&w=2740&q=60&fm=webp",product_id:18}, {url:"https://cdn-images.article.com/products/SKU15197/2890x1500/image64205.jpg?fit=max&w=2740&q=60&fm=webp",product_id:18}, {url:"https://cdn-images.article.com/products/SKU15197/2890x1500/image67188.jpg?fit=max&w=2740&q=60&fm=webp", product_id:18} ])

specifics_p18 = Specific.create(style:"


Mid-century modern", height:34, width:88, depth:38 ,materials:"

Kiln dried solid wood, high density foam, Polyester, Duck feathers, Fabric- 73% Polyester, 27% Acrylic, Martindale test - 50,000 rubs", color:"
Neptune Blue", product_id:18)


features_p18 = Feature.create([
  {feat:"Sturdy corner blocked wooden frame", product_id:18},
  {feat:"High density foam with polyester filling", product_id:18} ,
  {feat:"Pirelli webbing", product_id:18}, {feat: "Loose seat and back cushions", product_id:18}, {feat:"Simple assembly required (approximately 5 minutes)" , product_id:18}
 ])


 #/////////////////////////////////
 product_19 = Product.create(price:399, description:"Smoke screen. The Vitri teases smooth, powder-coated metal legs and walnut shelf through tempered smoke-glass. Perfect for resting your drink, the Vitri brings intrigue and a sixties edge to your living space.", material:"Glass",cat:"table", name:"	Vitri Walnut Coffee Table")

pictures_p19 = Picture.create([{url:"https://cdn-images.article.com/products/SKU3706/2890x1500/image56196.jpg?fit=max&w=2740&q=60&fm=webp", product_id:19}, {url:"https://cdn-images.article.com/products/SKU3706/2890x1500/image56198.jpg?fit=max&w=2740&q=60&fm=webp",product_id:19},{url:"https://cdn-images.article.com/products/SKU3706/2890x1500/image56199.jpg?fit=max&w=2740&q=60&fm=webp",product_id:19}, {url:"https://cdn-images.article.com/products/SKU3706/2890x1500/image56200.jpg?fit=max&w=2740&q=60&fm=webp",product_id:19}, {url:"https://cdn-images.article.com/products/SKU3706/2890x1500/image56201.jpg?fit=max&w=2740&q=60&fm=webp",product_id:19}, {url:"https://cdn-images.article.com/products/SKU3706/2890x1500/image56197.jpg?fit=max&w=2740&q=60&fm=webp", product_id:19} ])

specifics_p19 = Specific.create(style:"

Mid-century modern", height:15, width:36.5, depth:36.5 ,materials:"Glass, veneered Walnut, MDF, metal", color:"Walnut", product_id:19)


features_p19 = Feature.create([
  {feat:"Smoke colored glass top", product_id:19},
  {feat:"Veneered Walnut shelf", product_id:19} ,
  {feat:"Assembly not required", product_id:19},
 ])
#//////////////////////////////////



product_20 = Product.create(price:799, description:"Our most popular sofa, reimagined as a large, cozy lounge chair. This modern take on a mid-century classic features clean lines, a tufted seat, and a luxuriously stuffed back cushion. Two matching round bolsters complete the look.", material:"Fabric",cat:"chair", name:"Sven Birch Ivory Chair")

pictures_p20 = Picture.create([{url:"https://cdn-images.article.com/products/SKU3221/2890x1500/image57882.jpg?fit=max&w=2740&q=60&fm=webp", product_id:20}, {url:"https://cdn-images.article.com/products/SKU3221/2890x1500/image57884.jpg?fit=max&w=2740&q=60&fm=webp",product_id:20},{url:"https://cdn-images.article.com/products/SKU3221/2890x1500/image57885.jpg?fit=max&w=2740&q=60&fm=webp",product_id:20}, {url:"https://cdn-images.article.com/products/SKU3221/2890x1500/image57886.jpg?fit=max&w=2740&q=60&fm=webp",product_id:20}, {url:"https://cdn-images.article.com/products/SKU3221/2890x1500/image57887.jpg?fit=max&w=2740&q=60&fm=webp",product_id:20}, {url:"https://cdn-images.article.com/products/SKU3221/2890x1500/image73681.jpg?fit=max&w=2740&q=60&fm=webp", product_id:20} ])

specifics_p20 = Specific.create(style:"

Mid-century modern", height:34, width:42, depth:38 ,materials:"Kiln dried solid wood, high density foam, Polyester, Duck feathers, Fabric- 73% Polyester, 27% Acrylic, Martindale test - 50,000 rubs", color:"Birch Ivory", product_id:20)


features_p20 = Feature.create([
  {feat:"Sturdy corner blocked wooden frame", product_id:20},
  {feat:"High density foam with polyester filling", product_id:20} ,
  {feat:"Loose seat and back cushions", product_id:20}, {feat:"Simple assembly required (approximately 5 minutes)", product_id:20}
 ])

 #////////////////////////
 product_21 = Product.create(price:349, description:"The Sven Ottoman in Birch Ivory is your new BFF. The tufted topper supports short and long legs alike. Sturdy and adaptable, this ivory ottoman is a great supporting character in your living space.", material:"Fabric",cat:"sofa", name:"Sven Birch Ivory Chair")

pictures_p21 = Picture.create([{url:"https://cdn-images.article.com/products/SKU12786/2890x1500/image69613.jpg?fit=max&w=2740&q=60&fm=webp", product_id:21}, {url:"https://cdn-images.article.com/products/SKU12786/2890x1500/image69614.jpg",product_id:21},{url:"https://cdn-images.article.com/products/SKU12786/2890x1500/image69615.jpg",product_id:21}, {url:"https://cdn-images.article.com/products/SKU12786/2890x1500/image69620.jpg",product_id:21}, {url:"https://cdn-images.article.com/products/SKU12786/2890x1500/image69618.jpg",product_id:21}, {url:"https://cdn-images.article.com/products/SKU12786/2890x1500/image73679.jpg", product_id:21} ])

specifics_p21 = Specific.create(style:"

Mid-century modern", height:18, width:30, depth:25 ,materials:"
Kiln dried solid wood, high density foam, Polyester, Duck feathers, Fabric- 73% Polyester, 27% Acrylic, Martindale test - 50,000 rubs", color:"Birch Ivory", product_id:21)


features_p21 = Feature.create([
  {feat:"High density foam with polyester filling", product_id:21},
  {feat:"Pirelli webbing", product_id:21} ,
  {feat:"Simple assembly required (approximately 5 minutes)", product_id:21}
 ])


 #////////////////////////
 product_22 = Product.create(price:499, description:"Low square footage? No problem. The Fantol bookshelf indulges you with five shelves that are stacked to take full advantage of your vertical space. Solid wood gables hold up veneered shelves that feature unique dark oak-grain cathedrals. Use one Fantol as a strong and solitary bookshelf, pair them up for a symmetrical look on either side of your fireplace, or line up a few Fantols in your organic candle shop to show off the products. It’s like the chameleon of bookshelves.", material:"Wood",cat:"office", name:"	Fantol Dark Oak Narrow Bookcase")

pictures_p22 = Picture.create([{url:"https://cdn-images.article.com/products/SKU16388/2890x1500/image63634.jpg?fit=max&w=2740&q=60&fm=webp", product_id:22}, {url:"https://cdn-images.article.com/products/SKU16388/2890x1500/image63636.jpg?fit=max&w=2740&q=60&fm=webp",product_id:22},{url:"https://cdn-images.article.com/products/SKU16388/2890x1500/image63637.jpg",product_id:22}, {url:"https://cdn-images.article.com/products/SKU16388/2890x1500/image63685.jpg",product_id:22}, {url:"https://cdn-images.article.com/products/SKU16388/2890x1500/image63686.jpg",product_id:22}, {url:"https://cdn-images.article.com/products/SKU16388/2890x1500/image67806.jpg", product_id:22} ])

specifics_p22 = Specific.create(style:"


Scandinavian", height:79, width:26.5, depth:16 ,materials:"
Solid oak, engineered wood, oak veneer", color:"
Dark Oak", product_id:22)


features_p22 = Feature.create([
  {feat:"Solid Oak frame", product_id:22},
  {feat:"Wood is a natural material with diverse patterning and color. Variations should be expected and treasured as a unique element", product_id:22} ,
  {feat:"Warning! To ensure the safety of you, your family, and your guests, this item must be secured to the wall according to the product’s assembly instructions.", product_id:22},
  {feat:"Simple assembly required (approximately 5 minutes)", product_id:22}
 ])

 #//////////////////


  product_23 = Product.create(price:499, description:"Natural cowhide, a timeless look. The Cossa Rug will tie together your cabin, study, or serve as the perfect place to get cozy in front of the fireplace with ease.", material:"Cowhide",cat:"decor", name:" Cossa Cowhide Brown Rug 5 x 8")

pictures_p23 = Picture.create([{url:"https://cdn-images.article.com/products/SKU16385/2890x1500/image66521.jpg?fit=max&w=2740&q=60&fm=webp", product_id:23}, {url:"https://cdn-images.article.com/products/SKU16385/2890x1500/image66522.jpg?fit=max&w=2740&q=60&fm=webp",product_id:23},{url:"https://cdn-images.article.com/products/SKU16385/2890x1500/image66523.jpg",product_id:23}, {url:"https://cdn-images.article.com/products/SKU16385/2890x1500/image66527.jpg",product_id:23}, {url:"https://cdn-images.article.com/products/SKU16385/2890x1500/image66524.jpg",product_id:23}, {url:"https://cdn-images.article.com/products/SKU16385/2890x1500/image68192.jpg", product_id:23} ])

specifics_p23 = Specific.create(style:"


Industrial", height:5, width:8, depth:nil ,materials:"
100% Cowhide", color:"
Golden Ecru", product_id:23)


features_p23 = Feature.create([
  {feat:"Made in India", product_id:23},
  {feat:"Cowhide rugs may vary slightly in size and colour", product_id:23} ,

 ])


 #????/////////////////////////////

  product_24 = Product.create(price:369, description:"A graceful mid-century modern look that’s set in stone. Solid wood legs are topped off by an elegant marble slab for a clean, compact look that’s perfect for small spaces. It's a classic design that will transition through any style of seating. Mix and match with solid wood tables.", material:"Marble",cat:"table", name:"	Mara Oak Coffee Table")

pictures_p24 = Picture.create([{url:"https://cdn-images.article.com/products/SKU418A/2890x1500/image45691.jpg?fit=max&w=2740&q=60&fm=webp", product_id:24}, {url:"https://cdn-images.article.com/products/SKU418A/2890x1500/image50164.jpg?fit=max&w=2740&q=60&fm=webp",product_id:24},{url:"https://cdn-images.article.com/products/SKU418A/2890x1500/image50162.jpg?fit=max&w=2740&q=60&fm=webp",product_id:24}, {url:"https://cdn-images.article.com/products/SKU418A/2890x1500/image50163.jpg?fit=max&w=2740&q=60&fm=webp",product_id:24}, {url:"https://cdn-images.article.com/products/SKU418A/2890x1500/image45694.jpg?fit=max&w=2740&q=60&fm=webp",product_id:24}, {url:"https://cdn-images.article.com/products/SKU418A/2890x1500/image66462.jpg?fit=max&w=2740&q=60&fm=webp", product_id:24} ])

specifics_p24 = Specific.create(style:"



Mid-century modern", height:14, width:31.5, depth:nil ,materials:"

American White Oak, engineered wood, Italian Carrara Marble", color:"

Oiled Oak", product_id:24)


features_p24 = Feature.create([
  {feat:"14mm solid white sealed marble", product_id:24},
  {feat:"Solid Oak legs with a low-sheen lacquer", product_id:24} , {
    feat:"Marble is a natural stone material and will vary significantly in color tone, vein markings and surface texture", product_id:24
  }, {feat:"Some assembly required (approximately 15 minutes)", product_id:24}

 ])
#//////////////////////////////////

  product_25 = Product.create(price:1499, description:"An aesthetic blast from the past. The Nera is finished with veneered American walnut. Dark and moody, it’s Don Draper without the personal shortcomings. Nightstand extensions give the Nera a commanding presence with thoughtful touches, such as the wire-nook that you can thread your phone-charger through, and soft-close nightstand drawers to discreetly hide your midnight snacks.", material:"Wood",cat:"bed", name:"Nera Walnut King Bed with Nightstands")

pictures_p25 = Picture.create([{url:"https://cdn-images.article.com/products/SKU12863/2890x1500/image72834.jpg?fit=max&w=2740&q=60&fm=webp", product_id:25}, {url:"https://cdn-images.article.com/products/SKU12863/2890x1500/image72835.jpg?fit=max&w=2740&q=60&fm=webp",product_id:25},{url:"https://cdn-images.article.com/products/SKU12863/2890x1500/image72836.jpg?fit=max&w=2740&q=60&fm=webp",product_id:25}, {url:"https://cdn-images.article.com/products/SKU12863/2890x1500/image62332.jpg?fit=max&w=2740&q=60&fm=webp",product_id:25}, {url:"https://cdn-images.article.com/products/SKU12863/2890x1500/image62333.jpg?fit=max&w=2740&q=60&fm=webp",product_id:25}, {url:"https://cdn-images.article.com/products/SKU12863/2890x1500/image62329.jpg?fit=max&w=2740&q=60&fm=webp", product_id:25} ])

specifics_p25 = Specific.create(style:"



Mid-century modern", height:38, width:117, depth:82 ,materials:"

Veneered American Black Walnut, engineered wood, solid Beech, steel, aluminum", color:"

Walnut", product_id:25)


features_p25 = Feature.create([
  {feat:"Wood is a natural material with diverse patterning and color. Variations should be expected and treasured as a unique element.", product_id:25},
  {feat:"Under-mounted soft-close headboard drawers", product_id:25} , {
    feat:"Photographed with 10 H mattress; mattress and bedding not included", product_id:25
  }, {feat:"Bed may be suitable for use with adjustable bed frames. Please contact customer care for further assistance", product_id:25}

 ])
#/////////////////////////////////////

  product_26 = Product.create(price:999, description:"Our beloved Sven collection has moved to the bedroom. Supported by a sturdy iron and wood frame, the Sven Bed’s Mid-Century Modern roots are showcased in the design of its plush headboard. Reach REM sleep in style.", material:"Fabric Headboard",cat:"bed", name:"Sven Birch Ivory King Bed")

pictures_p26 = Picture.create([{url:"https://cdn-images.article.com/products/SKU15629/2890x1500/image68088.jpg?fit=max&w=2740&q=60&fm=webp", product_id:26}, {url:"https://cdn-images.article.com/products/SKU15629/2890x1500/image68090.jpg?fit=max&w=2740&q=60&fm=webp",product_id:26},{url:"https://cdn-images.article.com/products/SKU15629/2890x1500/image68091.jpg?fit=max&w=2740&q=60&fm=webp",product_id:26}, {url:"https://cdn-images.article.com/products/SKU15629/2890x1500/image68092.jpg?fit=max&w=2740&q=60&fm=webp",product_id:26}, {url:"https://cdn-images.article.com/products/SKU15629/2890x1500/image68094.jpg?fit=max&w=2740&q=60&fm=webp",product_id:26}, {url:"https://cdn-images.article.com/products/SKU15629/2890x1500/image70609.jpg?fit=max&w=2740&q=60&fm=webp", product_id:26} ])

specifics_p26 = Specific.create(style:"



Mid-century modern", height:40.5, width:81.5, depth:90.5 ,materials:"


Kiln dried pine, Rubberwood, iron, foam. Fabric - 73% Polyester, 27% Acrylic, Martindale test - 50,000 rubs", color:"

Birch Ivory", product_id:26)


features_p26 = Feature.create([
  {feat:"Wooden slat base included", product_id:26},
  {feat:"Mattresses photographed range from 10 to 14 in height; mattress and bedding not included", product_id:26} , {
    feat:"Bed may be suitable for use with adjustable bed frames. Please contact customer care for further assistance", product_id:26
  }, {feat:"Some assembly required (approximately 1 hour)", product_id:26}

 ])

 #/////////////////////////////////////

  product_27 = Product.create(price:1399, description:"Extremely polished. The Nera 6-drawer double dresser features a subtle chevron wood grain pattern. Finished with veneered American walnut, each drawer blends seamlessly with the front facade, and is distinguished by a modern metal pull.", material:"Wood",cat:"bed", name:"Nera Walnut 6 Drawer Low Double Dresser")

pictures_p27 = Picture.create([{url:"https://cdn-images.article.com/products/SKU12921/2890x1500/image50479.jpg?fit=max&w=2740&q=60&fm=webp", product_id:27}, {url:"https://cdn-images.article.com/products/SKU12921/2890x1500/image50480.jpg?fit=max&w=2740&q=60&fm=webp",product_id:27},{url:"https://cdn-images.article.com/products/SKU12921/2890x1500/image50481.jpg?fit=max&w=2100&q=60&fm=webp",product_id:27}, {url:"https://cdn-images.article.com/products/SKU12921/2890x1500/image50482.jpg?fit=max&w=2100&q=60&fm=webp",product_id:27}, {url:"https://cdn-images.article.com/products/SKU12921/2890x1500/image50483.jpg?fit=max&w=2100&q=60&fm=webp",product_id:27}, {url:"https://cdn-images.article.com/products/SKU12921/2890x1500/image65959.jpg?fit=max&w=2100&q=60&fm=webp", product_id:27} ])

specifics_p27 = Specific.create(style:"



Mid-century modern", height:28, width:75, depth:17 ,materials:"



Veneered American Black Walnut, engineered wood, steel, aluminum
", color:"

Walnut", product_id:27)


features_p27 = Feature.create([
  {feat:"Veneered American Black Walnut", product_id:27},
  {feat:"Wood is a natural material with diverse patterning and color. Variations should be expected and treasured as a unique element.", product_id:27} , {
    feat:"Under-mounted soft-close drawers", product_id:27
  }, {feat:"Warning! To ensure the safety of you, your family, and your guests, this item must be secured to the wall according to the product assembly instructions.", product_id:27}

 ])

 #/////////////////////////////////////

  product_28 = Product.create(price:749, description:"Don’t let the relaxed look of the Onya Sofa fool you. Durable resin wicker, a powder-coated aluminum frame, and outdoor-friendly cushions create a sofa that’s backyard and rooftop-ready.", material:"Aluminum",cat:"outdoor", name:"Onya Lily White Sofa")

pictures_p28 = Picture.create([{url:"https://cdn-images.article.com/products/SKU16275/2890x1500/image63879.jpg?fit=max&w=2100&q=60&fm=webp", product_id:28}, {url:"https://cdn-images.article.com/products/SKU16275/2890x1500/image63880.jpg?fit=max&w=2100&q=60&fm=webp",product_id:28},{url:"https://cdn-images.article.com/products/SKU16275/2890x1500/image63881.jpg?fit=max&w=2100&q=60&fm=webp",product_id:28}, {url:"https://cdn-images.article.com/products/SKU16275/2890x1500/image63882.jpg?fit=max&w=2100&q=60&fm=webp",product_id:28}, {url:"https://cdn-images.article.com/products/SKU16275/2890x1500/image63883.jpg?fit=max&w=2100&q=60&fm=webp",product_id:28}, {url:"https://cdn-images.article.com/products/SKU16275/2890x1500/image65714.jpg?fit=max&w=2100&q=60&fm=webp", product_id:28} ])

specifics_p28 = Specific.create(style:"




Scandinavian", height:36.5, width:63.5, depth:30 ,materials:"
Aluminum, steel, resin wicker, foam, polyester fiber. Fabric - 100% polyester
", color:"

Lily White", product_id:28)


features_p28 = Feature.create([
  {feat:"Synthetic wicker construction", product_id:28},
  {feat:"Durable synthetic binding", product_id:28} , {
    feat:"Powder-coated aluminum frame", product_id:28
  }, {feat:"Powder coated steel legs", product_id:28}, {feat:"Some assembly required (approximately 15 minutes)", product_id:28}])




  #/////////////////////////////////////

  product_29 = Product.create(price:749, description:"Stretch out in the sun—or under the stars. The Biya Sofa is a comfy solution for all of your outdoor lounging needs, with its sturdy acacia wood frame topped with made-to-melt-into foam cushions.", material:"polyester",cat:"outdoor", name:"Biya Beach Sand Sofa")

pictures_p29 = Picture.create([{url:"https://cdn-images.article.com/products/SKU16280/2890x1500/image64033.jpg?fit=max&w=2100&q=60&fm=webp", product_id:29}, {url:"https://cdn-images.article.com/products/SKU16280/2890x1500/image64034.jpg?fit=max&w=2100&q=60&fm=webp",product_id:29},{url:"https://cdn-images.article.com/products/SKU16280/2890x1500/image65967.jpg?fit=max&w=2100&q=60&fm=webp",product_id:29}, {url:"https://cdn-images.article.com/products/SKU16280/2890x1500/image64035.jpg?fit=max&w=2100&q=60&fm=webp",product_id:29}, {url:"https://cdn-images.article.com/products/SKU16280/2890x1500/image64036.jpg?fit=max&w=2100&q=60&fm=webp",product_id:29}, {url:"https://cdn-images.article.com/products/SKU16280/2890x1500/image65688.jpg?fit=max&w=2100&q=60&fm=webp", product_id:29} ])

specifics_p29 = Specific.create(style:"
Boho", height:36.5, width:75, depth:30 ,materials:"
Acacia, foam, polyester fiber. Fabric: 100% Polyester
", color:"
Beach Sand
", product_id:29)


features_p29 = Feature.create([
  {feat:"Seat cushion secured with velcro, loose back cushions.", product_id:29},
  {feat:"Character and grain of the wood will vary for each piece.", product_id:29} , {
    feat:"Small cracks and fissures may develop with changes in humidity and temperature. This is a natural, uncontrollable characteristic of solid wood furniture", product_id:29
  }, {feat:"Solid Acacia.", product_id:29}, {feat:"Some assembly required (approximately 15 minutes)", product_id:29}

 ])


 #////////////////////////////


  product_30 = Product.create(price:649, description:"Easy living. The Beltaine Rocking Chair, made from durable synthetic wicker and a powder-coated aluminum frame, is the perfect locale for afternoons in the backyard with a book and a lemonade.", material:"
Aluminum",cat:"outdoor", name:"Beltaine Natural Rocking Chair")

pictures_p30 = Picture.create([{url:"https://cdn-images.article.com/products/SKU15442/2890x1500/image64726.jpg?fit=max&w=2100&q=60&fm=webp", product_id:30}, {url:"https://cdn-images.article.com/products/SKU15442/2890x1500/image64728.jpg?fit=max&w=2100&q=60&fm=webp",product_id:30},{url:"https://cdn-images.article.com/products/SKU15442/2890x1500/image64729.jpg?fit=max&w=2100&q=60&fm=webp",product_id:30}, {url:"https://cdn-images.article.com/products/SKU15442/2890x1500/image64730.jpg?fit=max&w=2100&q=60&fm=webp",product_id:30}, {url:"https://cdn-images.article.com/products/SKU15442/2890x1500/image64731.jpg?fit=max&w=2100&q=60&fm=webp",product_id:30}, {url:"https://cdn-images.article.com/products/SKU15442/2890x1500/image65725.jpg?fit=max&w=2100&q=60&fm=webp", product_id:30} ])

specifics_p30 = Specific.create(style:"
Mid-century modern", height:37.5, width:30.5, depth:40 ,materials:"
Powder coated aluminum", color:"Natural", product_id:30)


features_p30 = Feature.create([
  {feat:"Durable synthetic wicker and powder coated aluminum frame", product_id:30},
  {feat:"Suitable for indoor and outdoor use", product_id:30} , {
    feat:"Resistant to sea and chlorinated water", product_id:30
  }, {feat:"Assembly not required", product_id:30}

 ])