import convertToRupiah from '@root/src/utils/rupiah';
import springUtils, { AjaxResponse } from '@root/src/utils/springUtils';
import axios from 'axios';
import { Button, Table, Tabs } from 'flowbite-react';
import React from 'react';
import { HiAdjustments, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

interface UserInfo extends AjaxResponse {
  isLogin: boolean;
  name: string;
  isAdmin: boolean;
  saldo: number;
  authorities: string[];
  email: string;
  point: number;
  token: string;
}

/**
 * spring route `/me`
 * @returns
 */
export default function Dashboard() {
  const [userInfo, setUserInfo] = React.useState({} as UserInfo);
  const fetchUserInfo = () =>
    axios({
      url: springUtils.getURL('/me').toString(),
      withCredentials: true,
      method: 'GET'
    }).then(res => {
      if (res.data.error) {
        location.pathname = '/login';
      } else {
        setUserInfo(res.data);
      }
    });
  React.useEffect(() => {
    document.title = 'Dashboard';
    fetchUserInfo();
  }, []);
  return (
    <main className="dark:text-white">
      <Tabs aria-label="Tabs with icons" style="underline">
        <Tabs.Item active title="Profile" icon={HiUserCircle}>
          <div className="overflow-x-auto">
            <Table>
              <Table.Head></Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Saldo</Table.Cell>
                  <Table.Cell>{convertToRupiah(userInfo.saldo)}</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Poin</Table.Cell>
                  <Table.Cell>{convertToRupiah(userInfo.point)}</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Token</Table.Cell>
                  <Table.Cell>
                    <code>{userInfo.token}</code>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Dashboard" icon={MdDashboard}>
          This is <b>Dashboard tab's associated content</b>. Clicking another tab will toggle the visibility of this one
          for the next. The tab JavaScript swaps classes to control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Settings" icon={HiAdjustments}>
          <Button color="red" title="Change password">
            <i className="fa-duotone fa-key"></i> <span className="ms-2">Change Password</span>
          </Button>
        </Tabs.Item>
        {/* <Tabs.Item title="Contacts" icon={HiClipboardList}>
          This is <b>Contacts tab's associated content</b>. Clicking another tab will toggle the visibility of this one
          for the next. The tab JavaScript swaps classes to control the content visibility and styling.
        </Tabs.Item> */}
        {/* <Tabs.Item disabled title="Disabled">
          Disabled content
        </Tabs.Item> */}
      </Tabs>
    </main>
  );
}
