import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
    <div
      style={{
        height: '10vh',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
    </div>
    <div>
      <h2 style={{
        padding: '15px',
      }}>1 - Профіль соціальної мережі</h2>
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
    </div>
    <div>
    <h2 style={{
        padding: '15px',
      }}>2- Секція статистики</h2>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
    <div>
    <h2 style={{
        padding: '15px',
      }}>3 - Список друзів</h2>
      <FriendList friends={friends} />
    </div>
    <div>
    <h2 style={{
        padding: '15px',
      }}>4 - Історія транзакцій</h2>
      <TransactionHistory items={transactions} />;
    </div>
    </>
  );
};
