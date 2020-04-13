const FAKE_API_DELAY = 400; // ms

let store = {
  cowsayPhrases: [
    'Come with me if you want to live',
    'I need your clothes, your boots, and your motorcycle',
    'I\'m a friend of Sarah Connor. I was told she was here. Could I see her please?',
  ],
  math: {
    a: 'In mathematics, an affine algebraic plane curve is the zero set of a polynomial in two variables. A projective algebraic plane curve is the zero set in a projective plane of a homogeneous polynomial in three variables. An affine algebraic plane curve can be completed in a projective algebraic plane curve by homogenizing its defining polynomial. Conversely, a projective algebraic plane curve of homogeneous equation h(x, y, t) = 0 can be restricted to the affine algebraic plane curve of equation h(x, y, 1) = 0. These two operations are each inverse to the other; therefore, the phrase algebraic plane curve is often used without specifying explicitly whether it is the affine or the projective case that is considered.',
    b: 'In mathematics, the binomial coefficients are the positive integers that occur as coefficients in the binomial theorem. Commonly, a binomial coefficient is indexed by a pair of integers n ≥ k ≥ 0 and is written ( n k ) . {\displaystyle {\tbinom {n}{k}}.} {\displaystyle {\tbinom {n}{k}}.} It is the coefficient of the xk term in the polynomial expansion of the binomial power (1 + x)n, and it is given by the formula',
    c: 'In geometry, a coordinate system is a system that uses one or more numbers, or coordinates, to uniquely determine the position of the points or other geometric elements on a manifold such as Euclidean space.[1][2] The order of the coordinates is significant, and they are sometimes identified by their position in an ordered tuple and sometimes by a letter, as in "the x-coordinate". The coordinates are taken to be real numbers in elementary mathematics, but may be complex numbers or elements of a more abstract system such as a commutative ring. The use of a coordinate system allows problems in geometry to be translated into problems about numbers and vice versa; this is the basis of analytic geometry.[3]',
  },
};

// These two functions stand in as mocks for real upstream
// service calls, keeping this demo scaffolding self-contained
// from a service architecture perspective.

export async function get(key, fallback) {
  return new Promise(function(resolve) {
    setTimeout(() => {
      resolve(store[key] || fallback);
    }, FAKE_API_DELAY);
  });
}

export async function set(key, value) {
  return new Promise(function(resolve) {
    setTimeout(() => {
      store[key] = value;
      resolve('OK');
    })
  });
}

export { FAKE_API_DELAY };
