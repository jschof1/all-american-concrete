export async function fetchContent(componentName) {
    const url = `https://opensheet.elk.sh/1hB_Qrp2F38VxMUXoeElF_zRSvH89G2JStJsF1CUV0ck/${componentName}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.reduce((acc, item) => {
      acc[item.TagName] = item.TextContent;
      return acc;
    }, {});
  }

 