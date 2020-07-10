#include <iostream>
#include <iomanip>
#include <fstream>
#include <algorithm>
#include <queue>
#include <vector>
#include <map>
#include <set>
#include <string>

using namespace std;
typedef long long ll;
const int MAXN = 200100;
const int MAXD = 210;

int N, D;
int arr[MAXN];

int nval[MAXD];

int fval(int x)
{
    for (int i = 0; i < MAXD; i++)
    {
        if (nval[i] >= x)
            return i;
        x -= nval[i];
    }
    return 0;
}

int main()
{
    cin >> N >> D;
    for (int i = 0; i < N; i++)
    {
        cin >> arr[i];
    }

    for (int i = 0; i < MAXD; i++)
        nval[i] = 0;

    int ans = 0;
    for (int i = 0; i < N; i++)
    {
        if (i >= D)
        {
            int mval = fval(D / 2 + 1) + fval((D + 1) / 2);
            //cout << mval << " " << arr[i] << "\n";
            if (arr[i] >= mval)
                ans++;
        }

        nval[arr[i]]++;
        if (i >= D)
        {
            nval[arr[i - D]]--;
        }
    }

    cout << ans << "\n";
    return 0;
}