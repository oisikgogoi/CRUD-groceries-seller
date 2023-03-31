import {atom, selector} from 'recoil'

export const productState = atom({
    key:'productState',
    default : [
            //fruits
            {
                name:'grapes',
                img:'🍇',
                price:133,
                type:'fruits',
                id:1
            },
            {
                name:'orange',
                img:'🍊',
                price:220,
                type:'fruits',
                id:2
            },
            {
                name:'watermelon',
                img:'🍉',
                price:123,
                type:'fruits',
                id:3
            },
            {
                name:'banana',
                img:'🍌',
                price:123,
                type:'fruits',
                id:4
            },
            {
                name:'apple',
                img:'🍎',
                price:123,
                type:'fruits',
                id:5
            },
            
        
            //vegis
            {
                name:'brinjal',
                img:'🍆',
                price:123,
                type:'vegetables',
                id:6
            },
            {
                name:'carrot',
                img:'🥕',
                price:123,
                type:'vegetables',
                id:7
            },
            {
                name:'potato',
                img:'🥔',
                price:123,
                type:'vegetables',
                id:8
            },
            {
                name:'mushroom',
                img:'🍄',
                price:123,
                type:'vegetables',
                id:9
            },
            {
                name:'cucumber',
                img:'🥒',
                price:123,
                type:'vegetables',
                id:10
            },
            {
                name:'brocolli',
                img:'🥦',
                price:123,
                type:'vegetables',
                id:11
            },
            {
                name:'garlic',
                img:'🧄',
                price:123,
                type:'vegetables',
                id:12
            },
            {
                name:'onion',
                img:'🌰',
                price:123,
                type:'vegetables',
                id:13
            },
        
            //meals
            {
                name:'meat',
                img:'🍖',
                price:123,
                type:'meals',
                id:14
            },
            {
                name:'curry',
                img:'🥘',
                price:123,
                type:'meals',
                id:15
            },
            {
                name:'ricecake',
                img:'🍙',
                price:123,
                type:'meals',
                id:16
            },
            {
                name:'rice',
                img:'🍛',
                price:123,
                type:'meals',
                id:17
            },
            {
                name:'sweetpotato',
                img:'🍠',
                price:123,
                type:'meals',
                id:18
            },
            {
                name:'noodles',
                img:'🍜',
                price:123,
                type:'meals',
                id:19
            },
            {
                name:'sushi',
                img:'🍣',
                price:123,
                type:'meals',
                id:20
            },
        
            //beverages
            {
                name:'icecream',
                img:'🍨',
                price:123,
                type:'beverages',
                id:21
            },
            {
                name:'candy',
                img:'🍭',
                price:123,
                type:'beverages',
                id:22
            },
            {
                name:'cupcake',
                img:'🧁',
                price:123,
                type:'beverages',
                id:23
            },
            {
                name:'cookie',
                img:'🍪',
                price:123,            
                type:'beverages',
                id:24
            },
            {
                name:'chocolate',
                img:'🍫',
                price:123,
                type:'beverages',
                id:25
            },
            {
                name:'honey',
                img:'🍯',
                price:123,
                type:'beverages',
                id:26
            },
            {
                name:'juice',
                img:'🍹',
                price:123,
                type:'beverages',
                id:27
            },
        
            //utensils
        
            {
                name:'cupplate',
                img:'🍽',
                price:123,
                type:'utensils',
                id:28
            },
            {
                name:'spoons',
                img:'🍴',
                price:123,
                type:'utensils',
                id:29
            },
            {
                name:'spoon',
                img:'🥄',
                price:123,
                type:'utensils',
                id:30
            },
            {
                name:'chopstick',
                img:'🥢',
                price:123,
                type:'utensils',
                id:31
            },
        
    ]
})

export const SearchText = atom({
    key:'SearchText',
    default : ''
})

export const FilterSelect = atom({
    key:'FilterSelect',
    default:''
})

export const FilteredProducts = selector({
    key:'FilteredProducts',
    get: ({get})=>{
        const Searchtext = get(SearchText)
        const products = get(productState)
        const filterSelect = get(FilterSelect)
        let filteredProducts = []

        filteredProducts = products.filter(item => item.name.includes(Searchtext)).filter(item=> filterSelect === '' ? true : filterSelect == item.type )

        return filteredProducts
    }
})