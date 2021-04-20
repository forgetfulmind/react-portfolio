import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGrid from "../components/project-preview-grid";
import SEO from "../components/seo";
import Layout from "../containers/layout";
// import Header from "../components/header";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import mail from "../assets/Mail-icon.png"


export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      subtitle
      description
      keywords
      face {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
        }
      }
    

  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        {site.face && site.face.asset && (
        <div className={"faceCont"}>
          <img className={"face"}
          src={imageUrlFor(buildImageObj(site.face))
            .width(300)
           }
            alt={site.face.alt}
          />
        </div>
      )}
        <h1 className= "title">{site.title}</h1>
        <h2 className= "subtitle">{site.subtitle}</h2>
        <div>
                                  <div className= "subhead" ><strong>Resume:</strong></div>
                                  <div>
                                  <a href="https://drive.google.com/file/d/1ScOGeYWKnBhbDZpkYfHyqUayc-h0C09z/view?usp=sharing" target="_blank">Download a PDF</a> 
                                  </div>
                                  <div className= "subhead"><strong>Current Position:</strong></div><div>Marketing Coordinator | Telos Alliance</div>
                                  <div className= "subhead"><strong>Contact Information:</strong></div>
                                    <div>
                                      <div className="mailRow">
                                      Email:&nbsp;<a href="mailto:forgetfulmind@gmail.com"> forgetfulmind@gmail.com</a>
                                      </div>
                                      <div className="mailRow">
                                     Phone: ‪(440) 290-9337‬
                                     </div>
                                     <div className="mailRow">
                                     Find me online at:&nbsp;
                                     <a href="https://www.linkedin.com/in/bryan-shay-31799995" target="_blank">LinkedIn</a> | <a href="https://github.com/forgetfulmind" target="_blank">GitHub</a> 
                                     </div>
                                   </div>
                                  
                                    
                            </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
