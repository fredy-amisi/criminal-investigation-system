CREATE TABLE CrimeRecords (
    id INT AUTO_INCREMENT PRIMARY KEY,
    crime_type VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    date_reported DATE NOT NULL,
    status ENUM('Pending', 'Under Investigation', 'Resolved', 'Closed') NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
