import { AssetType, IAsset } from '../containers/asset.container';
// import { GroupName } from '../container/ePDU-groupe.container';
// import { OutletStatus } from '../containers/outlet.container';
// import { IRackEPDU } from '../feed.scene';

const rackConfig: Array<IAsset> = [
    {
        id: 'server-1',
        type: AssetType.Server,
        title: 'Server 1',
        uPosition: 0,
        uHeight: 2,
        connection: [
            {
                feedName: 'Feed A',
                ePDUId: 1,
                groupIdOfEPDU: 1,
                outletId: 2,
            },
            {
                feedName: 'Feed B',
                ePDUId: 1,
                groupIdOfEPDU: 2,
                outletId: 1,
            },
        ],
        manufacturer: 'Hewlett Packard',
        totalPower: '180 kW',
    },
    {
        id: 'server-2',
        type: AssetType.Server,
        title: 'Server 2',
        uPosition: 3,
        uHeight: 2,
        connection: [
            {
                feedName: 'Feed A',
                ePDUId: 1,
                groupIdOfEPDU: 1,
                outletId: 3,
            },
            {
                feedName: 'Feed B',
                ePDUId: 1,
                groupIdOfEPDU: 1,
                outletId: 1,
            },
        ],
        manufacturer: 'Eaton',
        totalPower: '130 kW',
    },
    {
        id: 'server-3',
        type: AssetType.Server,
        title: 'Server 3',
        uPosition: 10,
        uHeight: 4,
        connection: [
            {
                feedName: 'Feed A',
                ePDUId: 1,
                groupIdOfEPDU: 2,
                outletId: 2,
            },
            {
                feedName: 'Feed B',
                ePDUId: 1,
                groupIdOfEPDU: 1,
                outletId: 4,
            },
        ],
        manufacturer: 'Hewlett Packard',
        totalPower: '150 kW',
    },
    {
        id: 'server-4',
        type: AssetType.Server,
        title: 'Server 4',
        uPosition: 6,
        uHeight: 2,
        connection: [
            {
                feedName: 'Feed A',
                ePDUId: 1,
                groupIdOfEPDU: 2,
                outletId: 3,
            },
            {
                feedName: 'Feed B',
                ePDUId: 1,
                groupIdOfEPDU: 1,
                outletId: 4,
            },
        ],
        manufacturer: 'Hewlett Packard',
        totalPower: '120 kW',
    },
    {
        id: 'server-5',
        type: AssetType.Server,
        uPosition: 18,
        title: 'Server 5',
        uHeight: 3,
        connection: [
            {
                feedName: 'Feed B',
                ePDUId: 2,
                groupIdOfEPDU: 1,
                outletId: 4,
            },
            {
                feedName: 'Feed A',
                ePDUId: 1,
                groupIdOfEPDU: 2,
                outletId: 3,
            },
        ],
        manufacturer: 'Eaton',
        totalPower: '180 kW',
    },
    {
        id: 'server-6',
        type: AssetType.Server,
        uPosition: 25,
        title: 'Server 6',
        uHeight: 1,
        connection: [
            {
                feedName: 'Feed B',
                ePDUId: 2,
                groupIdOfEPDU: 1,
                outletId: 4,
            },
            {
                feedName: 'Feed A',
                ePDUId: 2,
                groupIdOfEPDU: 1,
                outletId: 2,
            },
        ],
        manufacturer: 'Eaton',
        totalPower: '180 kW',
    },
    {
        id: 'server-7',
        type: AssetType.Server,
        uPosition: 35,
        title: 'Server 7',
        uHeight: 1,
        connection: [
            {
                feedName: 'Feed B',
                ePDUId: 2,
                groupIdOfEPDU: 1,
                outletId: 2,
            },
            {
                feedName: 'Feed A',
                ePDUId: 2,
                groupIdOfEPDU: 1,
                outletId: 3,
            },
        ],
        manufacturer: 'Eaton',
        totalPower: '140 kW',
    },
    {
        id: 'server-8',
        type: AssetType.Server,
        uPosition: 15,
        title: 'Server 8',
        uHeight: 1,
        connection: [
            {
                feedName: 'Feed A',
                ePDUId: 1,
                groupIdOfEPDU: 2,
                outletId: 2,
            },
            {
                feedName: 'Feed B',
                ePDUId: 1,
                groupIdOfEPDU: 1,
                outletId: 2,
            },
        ],
        manufacturer: 'Hewlett Packard',
        totalPower: '160 kW',
    },
    {
        id: 'server-9',
        type: AssetType.Server,
        uPosition: 40,
        title: 'Server 9',
        uHeight: 2,
        connection: [
            {
                feedName: 'Feed A',
                ePDUId: 2,
                groupIdOfEPDU: 2,
                outletId: 2,
            },
            {
                feedName: 'Feed B',
                ePDUId: 2,
                groupIdOfEPDU: 1,
                outletId: 2,
            },
        ],
        manufacturer: 'Eaton',
        totalPower: '80 kW',
    },
];

// const rackEPDUs: Array<IRackEPDU> = [
//     {
//         feedName: 'Feed A',
//         ePDU: [
//             {
//                 id: 1,
//                 group: [
//                     {
//                         id: 1,
//                         groupName: GroupName.A,
//                         outlet: [
//                             {
//                                 id: 1,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 2,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 3,
//                                 status: OutletStatus.on,
//                             },

//                             {
//                                 id: 4,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 5,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 6,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 7,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 8,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 9,
//                                 status: OutletStatus.on,
//                             },
//                         ],
//                     },
//                     {
//                         id: 2,
//                         groupName: GroupName.B,
//                         outlet: [
//                             {
//                                 id: 1,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 2,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 3,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 4,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 5,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 6,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 7,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 8,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 9,
//                                 status: OutletStatus.on,
//                             },
//                         ],
//                     },
//                 ],
//             },
//             {
//                 id: 2,
//                 group: [
//                     {
//                         id: 1,
//                         groupName: GroupName.C,
//                         outlet: [
//                             {
//                                 id: 1,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 2,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 3,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 4,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 5,
//                                 status: OutletStatus.on,
//                             },
//                         ],
//                     },
//                     {
//                         id: 2,
//                         groupName: GroupName.D,
//                         outlet: [
//                             {
//                                 id: 1,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 2,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 3,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 4,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 5,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 6,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 7,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 8,
//                                 status: OutletStatus.on,
//                             },
//                         ],
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         feedName: 'Feed B',
//         ePDU: [
//             {
//                 id: 1,
//                 group: [
//                     {
//                         id: 1,
//                         groupName: GroupName.A,
//                         outlet: [
//                             {
//                                 id: 1,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 2,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 3,
//                                 status: OutletStatus.on,
//                             },

//                             {
//                                 id: 4,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 5,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 6,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 7,
//                                 status: OutletStatus.on,
//                             },
//                         ],
//                     },
//                     {
//                         id: 2,
//                         groupName: GroupName.B,
//                         outlet: [
//                             {
//                                 id: 1,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 2,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 3,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 4,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 5,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 6,
//                                 status: OutletStatus.on,
//                             },
//                         ],
//                     },
//                 ],
//             },
//             {
//                 id: 2,
//                 group: [
//                     {
//                         id: 1,
//                         groupName: GroupName.C,
//                         outlet: [
//                             {
//                                 id: 1,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 2,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 3,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 4,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 5,
//                                 status: OutletStatus.on,
//                             },
//                         ],
//                     },
//                     {
//                         id: 2,
//                         groupName: GroupName.D,
//                         outlet: [
//                             {
//                                 id: 1,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 2,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 3,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 4,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 5,
//                                 status: OutletStatus.on,
//                             },
//                             {
//                                 id: 6,
//                                 status: OutletStatus.on,
//                             },
//                         ],
//                     },
//                 ],
//             },
//         ],
//     },
// ];

export class StaticObjectsHelper {
    public static getRackConfig(): Array<IAsset> {
        return rackConfig;
    }

    // public static getRackEpdus(): Array<IRackEPDU> {
    //     return rackEPDUs;
    // }
}
