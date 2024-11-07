"use client";
import { useState } from 'react';
import { warnaform } from '../color';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submittedData, setSubmittedData] = useState<string | null>(null);
  const [allRatings, setAllRatings] = useState<number[]>([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmittedData(`Nama: ${name}, Email: ${email}, Komentar: ${comment}`);
    setAllRatings([...allRatings, rating]);
  }

  function resetForm() {
    setName('');
    setEmail('');
    setComment('');
    setRating(0);
    setSubmittedData(null); // Reset submitted data when form resets
  }

  const handleClear = () => {
    resetForm();
  };

  const averageRating = allRatings.length > 0
    ? (allRatings.reduce((a, b) => a + b, 0) / allRatings.length).toFixed(1)
    : '0';

  return (
    <div>
      <h1
        className="text-4xl font-bold mb-6 tracking-widest"
        style={{
          textAlign: 'center',
          color: warnaform.textColor,
          textShadow: warnaform.boxShadow,
          fontFamily: 'Southern, sans-serif',
          paddingTop: 20,
        }}
      >
        Formulir Kontak 
      </h1>
      <div
        className="contact-form"
        style={{
          border: `2px solid ${warnaform.border}`,
          borderImage: `${warnaform.gradient} 1`,
          padding: '20px',
          backgroundColor: warnaform.background,
          borderRadius: '15px',
          maxWidth: '600px',
          margin: '20px auto',
          color: warnaform.textColor,
          boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
          overflow: 'hidden',
          marginBottom: '30px',
        }}
      >
        {submittedData ? (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
      <h2 style={{ paddingBottom:15, fontFamily: 'southern, sans-serif' }}>Kirim Data:</h2>
      <p style={{ margin: '5px 0', fontFamily: 'southern, serif' }}>Nama: {name}</p>
      <p style={{ margin: '5px 0', fontFamily: 'southern, serif' }}>Email: {email}</p>
      <p style={{ margin: '5px 0', fontFamily: 'southern, serif' }}>Komentar: {comment}</p>
    </div>
    <p style={{ paddingTop:12, fontFamily: 'southern, serif', maxWidth: '100%', wordWrap: 'break-word' }}>
    Penilaian Rata-rata: {averageRating} Bintang
    </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px' }}>
              <button
                type="button"
                onClick={resetForm}
                style={{
                  backgroundColor: warnaform.buttonBg,
                  color: warnaform.buttonText,
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  marginLeft: '10px', // Added margin for spacing
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c0c0c0'} // Hover effect
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = warnaform.buttonBg} // Revert effect
              >
                Kembali
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit} style={{ color: warnaform.textColor }}>
            {['Nama', 'Email'].map((field, index) => (
              <div key={index} style={{ marginTop: '10px' }}>
                <label>
                  {field}:
                  <input
                    type={field === 'Email' ? 'email' : 'text'}
                    value={field === 'Nama' ? name : email}
                    onChange={(e) => {
                      if (field === 'Nama') setName(e.target.value);
                      if (field === 'Email') setEmail(e.target.value);
                    }}
                    required
                    style={{
                      backgroundColor: warnaform.background,
                      color: warnaform.textColor,
                      border: `2px solid ${warnaform.border}`,
                      borderImage: `${warnaform.gradient} 1`,
                      padding: '5px',
                      borderRadius: '15px',
                      width: '100%',
                    }}
                  />
                </label>
              </div>
            ))}
            <div style={{ marginTop: '10px' }}>
              <label>Komentar:</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                style={{
                  backgroundColor: warnaform.background,
                  color: warnaform.textColor,
                  border: `2px solid ${warnaform.border}`,
                  borderImage: `${warnaform.gradient} 1`,
                  padding: '5px',
                  borderRadius: '7px',
                  width: '100%',
                  minHeight: '80px',
                }}
              />
            </div>
            <div style={{ marginTop: '10px' }}>
              <label>Rating:</label>
              <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      cursor: 'pointer',
                      color: (hoverRating || rating) >= star ? warnaform.textColor : warnaform.starInactive,
                      fontSize: '1.5em',
                    }}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    ★
                  </span>
                ))}
              </div>
              {allRatings.length > 0 && (
          <h3 style={{ paddingTop:12, fontFamily: 'Georgia, serif', maxWidth: '100%', wordWrap: 'break-word' }}>
            Penilaian Rata-rata: {averageRating} Bintang
          </h3>
        )}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
              <button
                type="button"
                onClick={handleClear}
                style={{
                  backgroundColor: warnaform.buttonBg,
                  color: warnaform.buttonText,
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c0c0c0'} // Hover effect
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = warnaform.buttonBg} // Revert effect
              >
                Hapus
              </button>
              <button
                type="submit"
                style={{
                  backgroundColor: warnaform.buttonBg,
                  color: warnaform.buttonText,
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c0c0c0'} // Hover effect
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = warnaform.buttonBg} // Revert effect
              >
                Kirim
              </button>
              
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
