let information: { readonly hasPets: boolean } = { hasPets: true };

console.log(information);

// You can actually reassign the entire object, but it will keep its type definition. The following is valid.
information = { hasPets: false };

console.log(information);