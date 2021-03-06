const products = [
    {
        productname: 'Self Planner',
        category: 'Stationery',
        price: 28,
        description: "We've updated our popular Self Planner with a brand new cover! Sometimes we feel like we don’t have enough time or space for ourselves. We work hard on projects, take good care of our relationships, and spend so much energy daily that by the end of each day we are often too tired to do what we want. What we have to do takes precedence over who we want to be. This is where the Self Planner comes in. We made this specifically for us and you.The Self Planner holds space for you to elevate your day-to-day by encouraging you to prioritize the things that matter to you",
        url: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Self-Planner-V2-01_8244fea2-c58f-4c59-8db1-8ab92412336f_480x.jpg?v=1602872920',
        backupurl: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Self-Planner-NL-04_480x.jpg?v=1603316397',
        bestseller: false,
        featured: true
    },
    {
        productname: 'Creativity Journal',
        category: 'Stationery',
        price: 28,
        description: "We've updated our popular Creativity Journal with a brand new cover! The Creativity Journal is an icebreaker for creativity to help you loosen up and unlock your unique, creative self. With prompts that engage, inspire, and instigate, you'll realize that there's no one way to stay creative. There's gotta be, at least, like, a million.",
        url: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Creativity-Journal-V2-01_73d28992-d3d2-493d-9a6c-428548ffeaa0_480x.jpg?v=1602872810',
        backupurl: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Creativity-Journal-NL-01_480x.jpg?v=1602878071',
        bestseller: true,
        featured: false        
    },
    {
        productname: 'Accordion Pro Filer in Large',
        category: 'Stationery',
        price: 48,
        description: "Planning, scheduling, meeting, developing, executing, delivering, creating. This organizational tool has 12 vibrant subfolders to organize and consolidate all the layers and shades of your life. From your bills and other important documents to mood board inspiration, this sturdy folder expands, contracts, and adapts.",
        url: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Accordion-Folder-Black-Large-02_480x.jpg?v=1597171400',
        backupurl: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Accordion-Pro-Filer-1x1-07_ea706c81-1163-492a-b94b-d91196d5778b_480x.jpg?v=1597171641',
        bestseller: false,
        featured: false
    },
    {
        productname: 'Accordion Pro Filer in Small',
        category: 'Stationery',
        price: 38,
        description: "A smaller version of our popular Accordion Pro filer, perfect for organizing smaller items like receipts, business cards, or notes. Get creative with each of the colorful sections to create your own organizational system. The elastic enclosure keeps everything safe.",
        url: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Accordion-Folder-Black-Small-02_480x.jpg?v=1597171621',
        backupurl: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Accordion-Pro-Filer-1x1-07_ea706c81-1163-492a-b94b-d91196d5778b_480x.jpg?v=1597171641',
        bestseller: false,
        featured: false
    },
    {
        productname: 'Vibrant Sticker Tabs',
        category: 'Stationery',
        price: 8,
        description: "A perfect companion for our Project and Concept planners or anything that requires some extra organization. Use the month, week, and project tabs to create categories or the blank tabs to get creative with your own system.",
        url: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Vibrant-Tabs-Stickers-01_480x.jpg?v=1592247362',
        backupurl: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Virbrant-Tabs-1x1_96b26691-7d38-4414-92f6-c6db901017da_480x.jpg?v=1594144939',
        bestseller: false,
        featured: false
    },
    {
        productname: 'Friendly Reminder Stickers',
        category: 'Stationery',
        price: 8,
        description: "Make everyday planning more fun with Reminder Stickers. Use the pre-made stickers to quickly note your events, or get creative by writing in the blank stickers. Planning won't ever be boring again!",
        url: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Friendly-Reminder-Stickers-01_480x.jpg?v=1594144869',
        backupurl: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Friendly-Reminder-Stickers-1x1_480x.jpg?v=1594144837',
        bestseller: false,
        featured: false
    },
    {
        productname: 'Tuck Folder Set of 2',
        category: 'Stationery',
        price: 14,
        description: "Keep your important papers safe with our playful folders that feature two inside pockets as well as a secure tab in front that tucks in to keep everything in place. Each set comes with two splashy designs and colorful solid interiors.",
        url: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Tuck-Folder-01_480x.jpg?v=1592250290',
        backupurl: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Tuck-Folder-04_480x.jpg?v=1592250296',
        bestseller: false,
        featured: false
    },
    {
        productname: 'Pocket Folder Set of 2 in Grid',
        category: 'Stationery',
        price: 18,
        description: "Our Pocket Folders are super popular because of the fun contrasting interior colors and designs and the secure elastic that keeps the folder closed and your papers safe. Each set comes with two colors to keep things organized and visually interesting.",
        url: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Pocket-Folder-Red-Grid-01_480x.jpg?v=1592249791',
        backupurl: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Pocket-Folders-Red-Grid-02_480x.jpg?v=1592249797',
        bestseller: false,
        featured: false
    },
    {
        productname: 'Color Your Goals',
        category: 'Stationery',
        price: 12,
        description: "A refreshing, visual way to track whatever goal you want to accomplish over a month. Put the poster up where you can see it easily, then color it to commemorate every day you accomplish your goal. You'll be encouraged to keep going when you see your poster filling up with color!",
        url: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Monthly-Goal-Tracker-01_480x.jpg?v=1592246855',
        backupurl: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Goal-Tracker-NL-02_480x.jpg?v=1595355160',
        bestseller: false,
        featured: false
    },
    {
        productname: 'Quarterly Goal Planner in Yellow',
        category: 'Stationery',
        price: 28,
        description: "A quarter is an ideal amount of time for setting and accomplishing goals. It's long enough to really see results, but short enough to keep up momentum and motivation. Whether you want to accomplish something professionally, creatively, or personally, we designed the Quarterly Planner to help you set your goals and track them. Answer the prompts to get ideas flowing and use the open-dated calendar pages to make sure you're on track. And don't forget to celebrate your successes! Coordinate with the Quarterly Planner in Green, Red, and Blue to accomplish your goals year-round.",
        url: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Quarterly-Goal-Planner-Yellow-01_480x.jpg?v=1592939548',
        backupurl: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Quarterly-Planners-1x1-01_1920x_4f8d0576-3718-46d7-8999-07bafbad5e3b_480x.jpg?v=1594661557',
        bestseller: false,
        featured: false
    },
    {
        productname: 'Quarterly Goal Planner in Red',
        category: 'Stationery',
        price: 28,
        description: "A quarter is an ideal amount of time for setting and accomplishing goals. It's long enough to really see results, but short enough to keep up momentum and motivation. Whether you want to accomplish something professionally, creatively, or personally, we designed the Quarterly Planner to help you set your goals and track them. Answer the prompts to get ideas flowing and use the open-dated calendar pages to make sure you're on track. And don't forget to celebrate your successes! Coordinate with the Quarterly Planner in Yellow, Green, and Blue to accomplish your goals year-round.",
        url: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Quarterly-Goal-Planner-Red-01_480x.jpg?v=1592938189',
        backupurl: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Quarterly-Planners-1x1-01_1920x_4f8d0576-3718-46d7-8999-07bafbad5e3b_480x.jpg?v=1594661557',
        bestseller: false,
        featured: false
    },
    {
        productname: 'Quarterly Goal Planner in Green',
        category: 'Stationery',
        price: 28,
        description: "A quarter is an ideal amount of time for setting and accomplishing goals. It's long enough to really see results, but short enough to keep up momentum and motivation. Whether you want to accomplish something professionally, creatively, or personally, we designed the Quarterly Planner to help you set your goals and track them. Answer the prompts to get ideas flowing and use the open-dated calendar pages to make sure you're on track. And don't forget to celebrate your successes! Coordinate with the Quarterly Planner in Yellow, Red, and Blue to accomplish your goals year-round.",
        url: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Quarterly-Goal-Planner-Green-01_480x.jpg?v=1592939895',
        backupurl: 'https://cdn.shopify.com/s/files/1/0001/5211/products/Quarterly-Planners-1x1-01_1920x_4f8d0576-3718-46d7-8999-07bafbad5e3b_480x.jpg?v=1594661557',
        bestseller: false,
        featured: false
    },
]

export default products;