/// <reference path='../../types/customHtmlAttributes.d.ts' />

import { saveForms } from '@root/src/components/formSaver';
import { formDataToJSON } from '@root/src/utils/form';
import springUtils, { AjaxResponse } from '@root/src/utils/springUtils';
import axios, { AxiosRequestConfig } from 'axios';
import { Button, Label, Tabs, TextInput } from 'flowbite-react';
import { FormEvent, useEffect } from 'react';
import { HiUserCircle } from 'react-icons/hi';

export default function Login() {
  // const { setShowToast, setToastInfo } = useOutletContext<FlowbiteToastContext>();
  useEffect(() => {
    saveForms();
  }, []);

  return (
    <main className="space-y-4">
      <Tabs aria-label="Login Form" style="default">
        <Tabs.Item active title="Login with email and password" icon={HiUserCircle}>
          <form
            action="#"
            method="post"
            className="flex max-w-md flex-col gap-4 mx-auto"
            onSubmit={e => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const url = new URL(springUtils.getOrigin());
              const email = form.querySelector<HTMLInputElement>('input[name=email]')?.value || 'null';
              const password = form.querySelector<HTMLInputElement>('input[name=password]')?.value || 'null';
              url.pathname = '/login/' + email + '/' + password;
              fetch(url)
                .then(res => res.json())
                .then((data: AjaxResponse) => {
                  // setToastInfo({ title: data.error ? 'Gagal' : 'Sukses', description: data.message });
                  // setShowToast(true);
                });
            }}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput id="email1" name="email" type="email" placeholder="name@flowbite.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" name="password" type="password" required />
            </div>
            <Button type="submit" color="blue">
              Submit
            </Button>
          </form>
        </Tabs.Item>
        <Tabs.Item title="Login Using Token" icon={HiUserCircle}>
          <form action="/login/:token" className="flex max-w-md flex-col gap-4 mx-auto" onSubmit={formHandler}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="token" value="Your token" />
              </div>
              <TextInput id="token" name="token" type="text" placeholder="xxxx-xxxx-xxxx-xxx" required />
            </div>
            <Button type="submit" color="blue">
              Submit
            </Button>
          </form>
        </Tabs.Item>
      </Tabs>
    </main>
  );
}

function formHandler(e: FormEvent) {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  // console.log(formDataToJSON(new FormData(form)));
  const requestConfig: AxiosRequestConfig = {
    method: (form.method || 'GET').toUpperCase(),
    withCredentials: false,
    url: form.action
  };
  if (form.action.startsWith('/')) {
    requestConfig.url = springUtils.getOrigin() + form.action;
  }
  if (requestConfig.method == 'POST') {
    if (!requestConfig.headers) requestConfig.headers = {};
    requestConfig.headers['Content-Type'] = 'application/json';
    requestConfig.data = formDataToJSON(new FormData(form));
  }
  axios(requestConfig).then(res => {
    console.log(res.data);
  });
}
