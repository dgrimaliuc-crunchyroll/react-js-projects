import PageContent from '../components/PageContent';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <PageContent title='An error occured'>
      <p>
        {error.data.message} ({error.status})
      </p>
    </PageContent>
  );
}
