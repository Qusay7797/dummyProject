import React, { useState, useEffect } from "react";
import PrefHeader from "./preference_header";
import ViewList from "./pagination_list";
import CustomPagination from "./pagination";
import { makeStyles } from "@material-ui/core/styles";
import { request } from "graphql-request";

function MainPage() {
  const [dType, setdType] = useState({ name: "APARTMENT", index: 0 });
  const [vType, setvType] = useState("list");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPer] = useState(24);
  const [pageCount, setCount] = useState(1);

  function choice(v, i) {
    setdType({ name: v, index: i });
  }
  function pickLayout(v) {
    setvType(v);
    diffP(v);
  }
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function diffP(v) {
    setPer(v === "list" ? 24 : 12);
  }

  const useStyles = makeStyles((theme) => ({
    box: {
      background: "white",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    title: {
      textAlign: "center",
    },
    footer: {
      position: "absolute",
      bottom: 10,
      right: "45%",
    },
  }));
  const classes = useStyles();

  useEffect(() => {
    const getads = async () => {
      setLoading(true);
      const query = `query($first:Int,$skip:Int,$where:AdWhereInput){
        ads(first:$first skip:$skip where:$where ){
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
        adsConnection(where:$where){
          aggregate{
            count
          }
      }
    }`;
      const sskip = isNaN((vType === "list" ? 24 : 12) * (currentPage - 1))
        ? 0
        : (vType === "list" ? 24 : 12) * (currentPage - 1);
      const ffirst = vType === "list" ? 24 : 12;
      await request(
        "https://wo5j6g8j23.execute-api.us-east-1.amazonaws.com/staging",
        query,
        {
          skip: sskip,
          first: ffirst,
          where: {
            category: dType.name,
            status_in: ["ACTIVE"],
          },
        }
      ).then((data) => {
        console.log(sskip + " / " + ffirst);
        console.log(data.ads);
        console.log(currentPage + "her is get ads");
        setPosts(data.ads);
        setCount(data.adsConnection.aggregate.count);
        setLoading(false);
      });
    };
    getads();
  }, [currentPage, vType, dType.name]);

  return (
    <div className={classes.box}>
      <div className={classes.title}>
        <h1>{dType.name + " and " + vType}</h1>
      </div>
      <PrefHeader layout={pickLayout} onChoose={choice}></PrefHeader>
      <div>
        <ViewList
          load={loading}
          vType={vType}
          dType={dType.name}
          data={posts}
        ></ViewList>
      </div>

      <div className={classes.footer}>
        <CustomPagination
          postsPerPage={postsPerPage}
          totalPosts={pageCount}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default MainPage;
