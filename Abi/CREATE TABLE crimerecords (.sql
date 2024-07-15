CREATE TABLE crimerecords (
    id INT AUTO_INCREMENT PRIMARY KEY,
    crimeType VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    description TEXT NOT NULL
);
