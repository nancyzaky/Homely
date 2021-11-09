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

specifics_p2 = Specific.create(style:"
Mid-century modern", height:32, width:90, depth:35,materials:"
Kiln dried solid wood frame, rubberwood legs, high density foam, Fabric - 90% Polyester 10% Linen, Martindale rating: 40,000 rubs, duck feathers", color:"
Olio Green", product_id:3)


features_p2 = Feature.create([{feat:"Sturdy corner blocked wooden frame", product_id:3}, {feat:"High density foam with polyester and down filling
", product_id:3}, {feat:"Loose seat and back cushions
",product_id:3}, {feat:"Pirelli webbing", product_id:3}, {feat:"Simple assembly required (approximately 5 minutes)",product_id:3}])