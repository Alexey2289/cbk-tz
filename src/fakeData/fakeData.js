export default {
    name: 'Root',
    id: Date.now().toString(),
    isRoot: true,
    children: [
        // {
        //     name: 'Child1',
        //     id: '1',
        //     children: [
        //         {
        //             name: 'Child1.1',
        //             id: '1.1',
        //             children: [
        //                 {
        //                     name: 'Child1.2',
        //                     id: '1.2',
        //                     children: [],
        //                     attribute: '01-09-1998'
        //                 }
        //             ]
        //         },
        //     ],
        //     attribute: '20-10-2020'
        // },
        // {
        //     name: 'Child2',
        //     id: '2',
        //     children: [],
        //     attribute: '30-07-1991'
        // },
    ],
    attribute: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`
}