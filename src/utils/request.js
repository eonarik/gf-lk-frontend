export default ({
  url,
  // method = 'GET',
  data,
}) => {
  const method = 'GET';
  const options = {
    method,
    credentials: 'include',
  };

  // const draftUrl = '/assets/components/modxsite/connectors/connector.php';
  // let draftParams = `pub_action=${url}&`;

  const draftUrl = `/api/${url}`;
  let draftParams = '';

  const token = window.localStorage.getItem('token') || undefined;
  if (token) draftParams += `token=${token}&`;

  if (data && Object.keys(data).length) {
    const draftData = {
      ...data,
    };

    switch (method) {
      case 'PATCH':
      case 'PUT':
      case 'POST':
        // eslint-disable-next-line no-case-declarations
        const formData = new FormData();
        for (const key in draftData) {
          formData.append(key, draftData[key]);
        }
        Object.assign(options, {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: formData,
        });
        break;
      case 'DELETE':
      case 'GET':
        // eslint-disable-next-line no-case-declarations
        const params = [];
        // eslint-disable-next-line no-case-declarations
        const keys = Object.keys(draftData);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          params.push(`${key}=${draftData[key]}`);
        }
        draftParams += `${params.join('&')}`;
        break;
      default:
    }
  }

  return fetch(`${draftUrl}?${draftParams}`, options)
    .then((response) => response.json())
    .catch((response) => {
      // eslint-disable-next-line
      console.error(response);
    });
};
