import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Profile = () => {
  const { id } = useParams(); // Get the ID from the URL

  const [user, setUser] = useState(null);
  const [readingList, setReadingList] = useState([]);
  const [readList, setReadList] = useState([]);
  const [planToReadList, setPlanToReadList] = useState([]);
  const [recommendationsList, setRecommendationsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:8080/user/by_id/${id}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    const fetchBookshelf = async (shelfType) => {
      try {
        const response = await fetch(
          `http://localhost:8080/list/get/${id}/${shelfType}`
        );
        const bookshelfData = await response.json();

        switch (shelfType) {
          case 0: // Reading List
            setReadingList(bookshelfData);
            break;
          case 1: // Read List
            setReadList(bookshelfData);
            break;
          case 2: // Plan to Read List
            setPlanToReadList(bookshelfData);
            break;
          default:
            break;
        }
      } catch (error) {
        console.error("Error fetching bookshelf:", error);
      }
    };

    const fetchRecommendations = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/recommend/user/${id}`
        );
        if (response.ok) {
          const recommendations = await response.json();
          setRecommendationsList(recommendations);
        } else {
          console.error("Error fetching recommendations:", response.status);
        }
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
    fetchBookshelf(0); // Fetch Reading List
    fetchBookshelf(1); // Fetch Read List
    fetchBookshelf(2); // Fetch Plan to Read List
    fetchRecommendations();
  }, [id]);

  if (!user) {
    return (
      <div class="centered-container">
        <img
          src="https://www.rockgota.com/vendor/source/ezgif-1-3ebf4a6e00.gif"
          alt="Animated GIF"
        />
      </div>
    ); // Show a loading state while fetching the user
  }

  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>{user.name}</span> {/* Display the user's name */}
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
            </div>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
          </div>
        </div>

        <div className="bookshelf">
          <h2>Reading List</h2>
          <div className="bookList">
            {readingList.map((book) => (
              <Link
              to={`/book/${book.isbn13}`}
              key={book.isbn13}
              className="bookItem"
              style={{ textDecoration: 'none' }}
            >
                <img
                  src={book.thumbnail}
                  alt={book.title}
                  className="bookCover"
                />
                <div className="bookDetails">
                  <div className="bookTitle">{book.title}</div>
                  <div className="bookAuthors">{book.authors.join(", ")}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bookshelf">
          <h2>Read List</h2>
          <div className="bookList">
            {readList.map((book) => (
              <Link
                to={`/book/${book.isbn13}`}
                key={book.isbn13}
                className="bookItem"
                style={{ textDecoration: "none" }}
              >
                <img
                  src={book.thumbnail}
                  alt={book.title}
                  className="bookCover"
                />
                <div className="bookDetails">
                  <div className="bookTitle">{book.title}</div>
                  <div className="bookAuthors">{book.authors.join(", ")}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bookshelf">
          <h2>Plan to Read List</h2>
          <div className="bookList">
            {planToReadList.map((book) => (
              <Link
                to={`/book/${book.isbn13}`}
                key={book.isbn13}
                className="bookItem"
                style={{ textDecoration: "none" }}
              >
                <img
                  src={book.thumbnail}
                  alt={book.title}
                  className="bookCover"
                />
                <div className="bookDetails">
                  <div className="bookTitle">{book.title}</div>
                  <div className="bookAuthors">{book.authors.join(", ")}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bookshelf">
          <h2>Recommendations</h2>
          <div className="loading-gif">
            {isLoading ? (
              <>
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F1J4X5chVxtBFS%2Fgiphy.gif&f=1&nofb=1&ipt=a7ae403ff8202db7070cd00129583648535c3077750974d2bf74a6f1e9fad0ba&ipo=images"
                  alt="Loading"
                />
              </>
            ) : (
              <div className="bookList">
                {recommendationsList.map((book) => (
                  <Link
                    to={`/book/${book.isbn13}`}
                    key={book.isbn13}
                    className="bookItem"
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src={book.thumbnail}
                      alt={book.title}
                      className="bookCover"
                    />
                    <div className="bookDetails">
                      <div className="bookTitle">{book.title}</div>
                      <div className="bookAuthors">
                        {book.authors.join(", ")}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
