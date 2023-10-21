import { createBrowserRouter } from 'react-router-dom';
import { paths } from './paths';
import NotFound from '../../pages/not-found/NotFound';
import Resume from '../../pages/resume/Resume';
import CreateVacancies from '../../pages/create-vacancies/CreateVacancies';
import Vacancies from '../../pages/vacancies/Vacancies';
import MainPage from '../../pages/main-page/MainPage';
import Respond from '../../pages/respond/Respond';

export const router = createBrowserRouter([
  {
    path: paths.notFound,
    element: <NotFound />,
  },
  {
    path: paths.respond,
    element: <Respond />,
  },
  {
    path: paths.resume,
    element: <Resume />,
  },
  {
    path: paths.vacancies,
    element: <Vacancies />,
  },
  {
    path: paths.create,
    element: <CreateVacancies />,
  },
  {
    path: paths.main,
    element: <MainPage />,
  }, 
]);
