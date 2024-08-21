//-----  -----
//----- Merge Sorted Array -----
//-----  -----

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
const m = (n = 3);

const merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n);
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);

  // console.log(nums1); use to see result
};

merge(nums1, m, nums2, n);
