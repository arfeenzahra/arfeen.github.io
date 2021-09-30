import Expenses from './components/Expenses';
function App() {
    let expense = [
        {
            id: 'e1',
            title: 'Electric Bill',
            amount: 250,
            date: new Date(2021, 8, 27)
        },
        {
            id: 'e2',
            title: 'Books',
            amount: 90,
            date: new Date(2021, 3, 21)
        },
        {
            id: 'e3',
            title: 'House Rent',
            amount: 180,
            date: new Date(2021, 30, 8)
        },
         {
            id: 'e4',
            title: "University's Expenses",
            amount: 130,
             date: new Date(2021, 4, 27)
        },
        {
            id: 'e5',
            title: 'Clothes',
            amount: 200,
            date: new Date(2021, 5, 10)
        },
        {
            id: 'e6',
            title: 'Net packages',
            amount: 110,
            date: new Date(2021, 7, 19)
        }
        // {
        //     id: 'e7',
        //     title: 'Electric bill',
        //     amount: 150,
        //     date: new Date(2021, 9, 27)
        // },
        // {
        //     id: 'e8',
        //     title: 'food',
        //     amount: 100,
        //     date: new Date(2021, 9, 27)
        // },
    ];

    return (
        <div>
            <h1 className="he2">First Project On React</h1>
            <Expenses item={expense} />
        </div>
    );
}

export default App;