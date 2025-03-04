import useStore from '@/store/zustandStore';
import TabNav from '../molecules/TabNav';

function MyPage() {
  const data = useStore();

  interface PersonStoreState {
    person: { firstName: string; lastName: string; email: string };
  }

  type Foo = ((
    person: PersonStoreState['person']
  ) =>
    | PersonStoreState['person'])
    |  PersonStoreState['person'];

  const foo: Foo = { firstName: 'string', lastName: 'string', email: 'string' }

  console.log(typeof foo);

  return (
    <section>
      {data.count}
      <TabNav />
    </section>
  );
}

export default MyPage;
