#include<bits/stdc++.h>
using namespace std;

int main()
{
    int t;
    cin>>t;
    
    while(t--)
    {
        int n,k;
        cin>>n>>k;
        
        int a[n],flag = 0;
        for(int i=0;i<n;i++)a[i] = i+1;
        
        
        {
        do{
            int sum = 0;
            for(int i=0;i<n;i++)
            {
                sum += abs(a[i]-(i+1));
            }
            if(sum == k)
            {
                flag = 1;
                break;
            }
        }
        while(next_permutation(a,a+n));
        
        if(flag)
        {
            cout<<"YES"<<endl;
            for(int i=0;i<n;i++)
            {
                cout<<a[i]<<" ";
            }
            cout<<endl;
        }
        else
        {
            cout<<"NO"<<endl;
            for(int i=0;i<n;i++)
            {
                cout<<a[i]<<" ";
            }
            cout<<endl;
        }
        }
    }
}