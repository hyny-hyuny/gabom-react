import ImageField from '../atoms/ImageField';

function PlaceList() {
  const placeList = [
    { id: '<id1>', name: '그라운시소 성수', date: '25. 3. 21' },
    { id: '<id2>', name: '그라운시소 성수', date: '25. 3. 21' },
    { id: '<id3>', name: '그라운시소 성수', date: '25. 3. 21' },
    { id: '<id4>', name: '그라운시소 성수', date: '25. 3. 21' },
    { id: '<id5>', name: '그라운시소 성수', date: '25. 3. 21' },
  ];

  const placeListMap = placeList.map((item) => {
    return (
      <ImageField
        width={'100%'}
        height={'8.75rem'}
        src=""
        alt={item.name}
        key={item.id}
        text={{ title: item.name, description: item.date }}
      />
    );
  });

  return <ul className="py-6 px-4 grid grid-cols-2 gap-4">{placeListMap}</ul>;
}

export default PlaceList;
