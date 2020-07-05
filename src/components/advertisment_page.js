import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { request } from "graphql-request";
function AdvPage(props) {
  console.log(props);
  //query
  const [loading, setLoading] = useState(true);
  const [data, setD] = useState();
  useEffect(() => {
    const getads = async () => {
      setLoading(true);
      const query = `query($where:AdWhereInput){
        ads(where:$where ){
          id
          images{
            id
            fileName
            main
          }
          s3Prefix
          category
          title
          description
      }
    }`;

      await request(
        "https://wo5j6g8j23.execute-api.us-east-1.amazonaws.com/staging",
        query,
        {
          where: {
            id: props.match.params.id,
          },
        }
      ).then((data) => {
        console.log(data.ads[0].title);
        setD(data.ads[0]);
        setLoading(false);
      });
    };
    getads();
  }, [props.match.params.id]);
  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      <img
        src={
          data && data.images && data.images.length > 0
            ? `https://d2udettvdk1u9q.cloudfront.net/250x156/smart/public/${data.s3Prefix}/${data.images[0].fileName}`
            : "https://d2udettvdk1u9q.cloudfront.net/250x156/smart/public/12785/no-photo"
        }
        alt="text"
      />

      <h1> {data.title}</h1>
    </div>
  );
}
export default withRouter(AdvPage);
