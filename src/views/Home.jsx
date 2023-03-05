import { Comments, Hero, Loader, Section } from '../components';
import {useGetComentsQuery} from '../redux/commentApi'

export const Home = () => {

  const {isLoading, isSuccess} = useGetComentsQuery();
  // console.log(data);


  return (
    <>
      <Section>
        {isLoading && <Loader/>}
        {isSuccess && 
        <>
          <Hero
          title='What people are saying.'
          subtitle='Feedback from our customers.'/>
          <Comments />
        </>
        }
        
      </Section>
    </>
  );
};
