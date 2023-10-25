import profile1 from '../assets/images/profile5.png';
import profile2 from '../assets/images/profile1.png';
import profile3 from '../assets/images/profile2.png';
import profile4 from '../assets/images/profile3.png';
import profile5 from '../assets/images/profile4.png';
//Use for Fake All Devices- Info
export const allDevicesInfo = [
    {
        id: 1,
        name: 'IMPORT190',
        licence_plate: 'AA 1278',
        status: 'active',
        colour: 'Black',
        vahicle_type: 'truck',
        capacity: {
            l: 300,
            w: 200,
            h: 300
        },
        driver: 'peter parker'
    },
    {
        id: 2,
        name: 'IMPORT190',
        licence_plate: 'AA 1278',
        status: 'deactive',
        colour: 'Black',
        vahicle_type: 'truck',
        capacity: {
            l: 300,
            w: 200,
            h: 300
        },
        driver: 'peter parker'
    },
    {
        id: 3,
        name: 'IMPORT190',
        licence_plate: 'AA 1278',
        status: 'active',
        colour: 'Black',
        vahicle_type: 'truck',
        capacity: {
            l: 300,
            w: 200,
            h: 300
        },
        driver: 'peter parker'
    },
    {
        id: 4,
        name: 'IMPORT190',
        licence_plate: 'AA 1278',
        status: 'active',
        colour: 'Black',
        vahicle_type: 'truck',
        capacity: {
            l: 300,
            w: 200,
            h: 300
        },
        driver: 'peter parker'
    }
]

//Use for Fake All Drivers- Info
export const driversInfos = [
    {
        id: 1,
        profile_img: profile1,
        online_status: 'active',
        first_name: 'Peter',
        last_name: 'Parker',
        phone: '+8 7784500150',
        email: 'peterparker74@gmail.com',
        address: {
            street: '1890 Popular Avenue',
            country: 'United Status',
            state: 'Alaska',
            city: 'San Diego',
            postalcode_zip: 92012
        },
        documents: null,
        rating: 5.0,
        active_orders: {
            status: 'active',
            orders: [
                {
                    id: 1,
                    order_id: '#ORDERID44756210',
                    source: 'Lagos',
                    destination: 'Moscow',
                    receiver_name: 'John Doe',
                    order_status: 'processing',
                    dimention: {
                        l: 300,
                        w: 200,
                        h: 300
                    }
                },
                {
                    id: 2,
                    order_id: '#ORDERID44756210',
                    source: 'Lagos',
                    destination: 'Moscow',
                    receiver_name: 'Watson ',
                    order_status: 'completed',
                    dimention: {
                        l: 300,
                        w: 200,
                        h: 300
                    }
                }
            ]
        }
    },
    {
        id: 2,
        profile_img: profile2,
        online_status: 'active',
        first_name: 'John',
        last_name: 'Doe',
        phone: '+8 7784500150',
        email: 'peterparker74@gmail.com',
        address: {
            street: '1890 Popular Avenue',
            country: 'United Status',
            state: 'Alaska',
            city: 'San Diego',
            postalcode_zip: 92012
        },
        documents: null,
        rating: 4.5,
        active_orders: {
            status: 'active',
            orders: [
                {
                    id: 1,
                    order_id: '#ORDERID44756210',
                    source: 'Lagos',
                    destination: 'Moscow',
                    receiver_name: 'John Doe',
                    order_status: 'processing',
                    dimention: {
                        l: 300,
                        w: 200,
                        h: 300
                    }
                },
                {
                    id: 2,
                    order_id: '#ORDERID44756210',
                    source: 'Lagos',
                    destination: 'Moscow',
                    receiver_name: 'Watson ',
                    order_status: 'completed',
                    dimention: {
                        l: 300,
                        w: 200,
                        h: 300
                    }
                }
            ]
        }
    },
    {
        id: 3,
        profile_img: profile5,
        online_status: 'inactive',
        first_name: 'Dan',
        last_name: 'Parker',
        phone: '+8 7784500150',
        email: 'peterparker74@gmail.com',
        address: {
            street: '1890 Popular Avenue',
            country: 'United Status',
            state: 'Alaska',
            city: 'San Diego',
            postalcode_zip: 92012
        },
        documents: null,
        rating: 1.0,
        active_orders: {
            status: 'active',
            orders: [
                {
                    id: 1,
                    order_id: '#ORDERID44756210',
                    source: 'Lagos',
                    destination: 'Moscow',
                    receiver_name: 'John Doe',
                    order_status: 'processing',
                    dimention: {
                        l: 300,
                        w: 200,
                        h: 300
                    }
                },
                {
                    id: 2,
                    order_id: '#ORDERID44756210',
                    source: 'Lagos',
                    destination: 'Moscow',
                    receiver_name: 'Watson ',
                    order_status: 'completed',
                    dimention: {
                        l: 300,
                        w: 200,
                        h: 300
                    }
                }
            ]
        }
    },
    {
        id: 4,
        profile_img: profile3,
        online_status: 'active',
        first_name: 'Peter',
        last_name: 'Parker',
        phone: '+8 7784500150',
        email: 'peterparker74@gmail.com',
        address: {
            street: '1890 Popular Avenue',
            country: 'United Status',
            state: 'Alaska',
            city: 'San Diego',
            postalcode_zip: 92012
        },
        documents: null,
        rating: 2.0,
        active_orders: {
            status: 'active',
            orders: [
                {
                    id: 1,
                    order_id: '#ORDERID44756210',
                    source: 'Lagos',
                    destination: 'Moscow',
                    receiver_name: 'John Doe',
                    order_status: 'processing',
                    dimention: {
                        l: 300,
                        w: 200,
                        h: 300
                    }
                },
                {
                    id: 2,
                    order_id: '#ORDERID44756210',
                    source: 'Lagos',
                    destination: 'Moscow',
                    receiver_name: 'Watson ',
                    order_status: 'completed',
                    dimention: {
                        l: 300,
                        w: 200,
                        h: 300
                    }
                }
            ]
        }
    },
    {
        id: 5,
        profile_img: profile4,
        online_status: 'inactive',
        first_name: 'Peter',
        last_name: 'Parker',
        phone: '+8 7784500150',
        email: 'peterparker74@gmail.com',
        address: {
            street: '1890 Popular Avenue',
            country: 'United Status',
            state: 'Alaska',
            city: 'San Diego',
            postalcode_zip: 92012
        },
        documents: null,
        rating: 3.0,
        active_orders: {
            status: 'active',
            orders: [
                {
                    id: 1,
                    order_id: '#ORDERID44756210',
                    source: 'Lagos',
                    destination: 'Moscow',
                    receiver_name: 'John Doe',
                    order_status: 'processing',
                    dimention: {
                        l: 300,
                        w: 200,
                        h: 300
                    }
                },
                {
                    id: 2,
                    order_id: '#ORDERID44756210',
                    source: 'Lagos',
                    destination: 'Moscow',
                    receiver_name: 'Watson ',
                    order_status: 'completed',
                    dimention: {
                        l: 300,
                        w: 200,
                        h: 300
                    }
                }
            ]
        }
    },

]

//Use for Fake account-infos 
export const accountInfos = [
    {
        id: 1,
        title: 'Total Income',
        checkEnable: true,
        amount: 14434,
        currency: 'USD',
        withdraw: false
    },
    {
        id: 2,
        title: 'Available Balance',
        checkEnable: false,
        amount: 14434,
        currency: 'USD',
        withdraw: true
    },
    {
        id: 3,
        title: 'Withdrawn',
        checkEnable: false,
        amount: 14434,
        currency: 'USD',
        withdraw: false
    }
]

//Use for Fake All Transactions info
export const transactionsInfos = [
    {
        id: 1,
        transaction_id: 'TR01AB9547628761M',
        date: '09/02/2022',
        amount: 1100,
        currency: 'USD',
        status: 'credited'
    },
    {
        id: 2,
        transaction_id: 'TR01AB9547628761M',
        date: '09/02/2022',
        amount: 1100,
        currency: 'USD',
        status: 'credited'
    },
    {
        id: 3,
        transaction_id: 'TR01AB9547628761M',
        date: '09/02/2022',
        amount: 1100,
        currency: 'USD',
        status: 'credited'
    },
    {
        id: 4,
        transaction_id: 'TR01AB9547628761M',
        date: '09/02/2022',
        amount: 1100,
        currency: 'USD',
        status: 'Withdrawal'
    },
    {
        id: 5,
        transaction_id: 'TR01AB9547628761M',
        date: '09/02/2022',
        amount: 1100,
        currency: 'USD',
        status: 'credited'
    },
]


//Use for  Fake Orders list 
export const orderLists = [
    {
        id: 1,
        order_id: '#ORDERID44756222',
        source: 'Lagos',
        destination: 'Moscow',
        receiver_name: 'John Doe',
        order_status: 'processing',
        dimention: {
            l: 300,
            w: 200,
            h: 300
        },
        driver: 'Phillips ',
        eta: '18 mins'
    },
    {
        id: 2,
        order_id: '#ORDERID44756210',
        source: 'Lagos',
        destination: 'Moscow',
        receiver_name: 'Watson ',
        order_status: 'completed',
        dimention: {
            l: 300,
            w: 200,
            h: 300
        },
        driver: 'Smith',
        eta: '18 mins'
    },
    {
        id: 3,
        order_id: '#ORDERID44756210',
        source: 'Lagos',
        destination: 'Moscow',
        receiver_name: 'John Doe',
        order_status: 'processing',
        dimention: {
            l: 300,
            w: 200,
            h: 300
        },
        driver: 'John Doe',
        eta: '18 mins'
    },
    {
        id: 4,
        order_id: '#ORDERID44756210',
        source: 'Lagos 2',
        destination: 'new york',
        receiver_name: 'Watson ',
        order_status: 'completed',
        dimention: {
            l: 300,
            w: 200,
            h: 300
        },
        driver: 'Phillips smith',
        eta: '18 mins'
    },
    {
        id: 5,
        order_id: '#ORDERID44756210',
        source: 'Lagos',
        destination: 'Moscow',
        receiver_name: 'John Doe',
        order_status: 'processing',
        dimention: {
            l: 300,
            w: 200,
            h: 300
        },
        driver: 'Phillips smith',
        eta: '18 mins'
    },
    {
        id: 6,
        order_id: '#ORDERID44756210',
        source: 'Lagos 4',
        destination: 'florida',
        receiver_name: 'Watson ',
        order_status: 'completed',
        dimention: {
            l: 300,
            w: 200,
            h: 300
        },
        driver: 'Phillips smith',
        eta: '18 mins'
    },
    {
        id: 7,
        order_id: '#ORDERID44756210',
        source: 'Lagos 3',
        destination: 'texas',
        receiver_name: 'Watson ',
        order_status: 'completed',
        dimention: {
            l: 300,
            w: 200,
            h: 300
        },
        driver: 'Phillips smith',
        eta: '18 mins'
    },
]


export const notifications = [
    {
        id: 1,
        time: '5 hours',
        notify_title: 'New Order Request',
        message: 'You have received new wait list request from john ode on 24 Feb, 9:00 PM'
    },
    {
        id: 2,
        time: '8 hours',
        notify_title: 'New Order Request',
        message: 'You have received new booking request from john Doe'
    },
    {
        id: 3,
        time: '12 hours',
        notify_title: 'New Order Request',
        message: '  You have received new booking request from john Doe'
    },
    {
        id: 4,
        time: '10 hours',
        notify_title: 'New Order Request',
        message: '  You have received new booking request from john Doe'
    },
    {
        id: 5,
        time: '12 hours',
        notify_title: 'Order Cancelled',
        message: 'Stellina parker has cancelled the booking on 24 Feb, 9:00'
    },
]