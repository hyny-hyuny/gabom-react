import useStore from '@/store/zustandStore';

function ExhibitionPage() {
  const data = useStore();

  console.log(data)

  return (
    <section>
   
      <button onClick={data.decrease}>-</button>
      {data.count}
      <button onClick={data.increase}>+</button>
    </section>
  );
}

export default ExhibitionPage;
