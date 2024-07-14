import { NavigationContainer } from '@react-navigation/native'

import TabRoutes from '../navigation/Tabs';

export default function Page() {
  return (
    <NavigationContainer independent={true}>
      <TabRoutes />
    </NavigationContainer>
  );
}
