// GitHubProfile.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./GitHubProfile.module.css";
import { BarChart } from "@mui/x-charts/BarChart";

const GitHubProfile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/shreyarathod")
      .then((response) => {
        setUserData(response.data);
        axios
          .get(response.data.repos_url)
          .then((response) => {
            setRepositories(response.data);

            const langCounts = {};
            response.data.forEach((repo) => {
              const { language } = repo;
              if (language) {
                if (langCounts[language]) {
                  langCounts[language]++;
                } else {
                  langCounts[language] = 1;
                }
              }
            });

            const sortedLanguages = Object.entries(langCounts)
              .sort((a, b) => b[1] - a[1])
              .map(([language]) => language);
            setLanguages(sortedLanguages);
          })
          .catch((error) => {
            setError(error);
          });
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const getLanguageUsagePercentage = (language) => {
    const totalRepos = repositories.length;
    const languageCount = repositories.filter(
      (repo) => repo.language === language
    ).length;
    return (languageCount / totalRepos) * 100;
  };

  const chartData = languages.map((language) =>
    getLanguageUsagePercentage(language)
  );

  // Calculate total number of stars
  const totalStars = repositories.reduce(
    (acc, repo) => acc + repo.stargazers_count,
    0
  );

  return (
    <div className={styles.githubProfile} id="git">
      {error && <p>Error: {error.message}</p>}
      {userData && (
        <div className={styles.gridContainer}>
          <div className={styles.box}>
            <div className={styles.profileCard}>
              <div className={styles.profile_image}>
                <img
                  className={styles.avatar}
                  src={userData.avatar_url}
                  alt="Profile Avatar"
                />
              </div>
              <h2>My GitHub Profile</h2>

              <div className={styles.followers_following}>
                <div className={styles.followers}>
                  <div className={styles.f_item}>Followers</div>
                  <div className={styles.f_item}>{userData.followers}</div>
                </div>
                <div className={styles.following}>
                  <div className={styles.f_item}>Following</div>
                  <div className={styles.f_item}>{userData.following}</div>
                </div>
              </div>
              <div className={styles.gridItem_button}>
                Total Stars: {totalStars}
              </div>
              <div className={styles.gridItem_button}>
                Public Repositories: {userData.public_repos}
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.profileCard}>
              <h2>Most Used Languages</h2>
              {languages.length > 0 && (
                <div className={styles.gridItem}>
                  <BarChart
                    series={[{ data: chartData }]}
                    height={340}
                    xAxis={[{ data: languages, scaleType: "band" }]}
                    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    className={styles.barchart}
                  />
                </div>
              )}
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.profileCard}>
              {repositories.length > 0 && (
                <>
                  <h2>Repositories</h2>
                  <table className={styles.repoTable}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Stars</th>
                      </tr>
                    </thead>
                    <tbody>
                      {repositories.map((repo) => (
                        <tr key={repo.id}>
                          <td>
                            <a href={repo.html_url}>{repo.name}</a>
                          </td>
                          <td>
                            <span className={styles.stars}>
                              {Array.from(
                                { length: repo.stargazers_count },
                                (_, i) => (
                                  <FontAwesomeIcon key={i} icon={faStar} />
                                )
                              )}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubProfile;
