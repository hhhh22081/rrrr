document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;

    var review = document.createElement('div');
    review.className = 'review';
    
    var h3 = document.createElement('h3');
    h3.textContent = name;
    review.appendChild(h3);
    
    var p = document.createElement('p');
    p.textContent = comment;
    review.appendChild(p);
    
    document.getElementById('reviews').appendChild(review);

    document.getElementById('reviewForm').reset();
});