import { getUser } from '@/lib/auth';
import supabase from '@/lib/supabase';
import { useEffect, useState } from 'react';

interface Reservation {
  id: string;
  created_at: Date;
  user_id: string;
  exhibit_id: string;
  reservation_date: Date;
  reservation_name: string;
  reservation_phone: string;
  count_adults: number;
  count_kids: number;
}

function ReservationList() {
  const [items, setItems] = useState<Reservation[]>([]);

  const getReservations = async () => {
    try {
      const user = await getUser();
      if (!user) throw new Error();

      const response = await supabase
        .from('reservation')
        .select('*')
        .eq('user_id', user?.id);

      if (response.error) {
        throw new Error();
      }

      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void getReservations();
  }, []);

  return (
    <section>
      <ul className="py-6 px-4">
        {items.map((item) => {
          return <li key={item.id}>{item.id}</li>;
        })}
      </ul>
    </section>
  );
}

export default ReservationList;
