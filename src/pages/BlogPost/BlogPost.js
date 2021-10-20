import React from "react";
import { Button, Card } from "react-bootstrap";
import { AnimationWrapper } from "react-hover-animation";
import Slide from 'react-reveal/Zoom';

const BlogPost = ({ blog }) => {
  return (
    
      <div className="col-md-4 col-12">
        <Slide left>
          <AnimationWrapper>
            <Card style={{ margin: "7px", padding: "10px" }}>
              <Card.Img
                style={{ height: "180px" }}
                className="card-img"
                variant="top"
                src={blog.image}
              />

              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>

                <div className="mt-3">
                  <Button variant="outline-success">
                    <a
                      href={blog.live}
                      className="text-decoration-none"
                    >
                      Live Preview
                    </a>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </AnimationWrapper>
        </Slide>
      </div>


   
  );
};

export default BlogPost;
